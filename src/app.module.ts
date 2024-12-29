import {
  Logger,
  Module,
} from '@nestjs/common';
import { AppService } from './app.service';
import { AppController } from './app.controller';
import * as fs from 'fs';
import { TypeOrmModule } from '@nestjs/typeorm';
import configService from './database/ormconfig.service';
import { AttendeesModule } from './modules/attendees/attendees/attendees.module';
import { EventsModule } from './modules/events/events.module';
import { RegistrationModule } from './modules/registration/registration.module';
import { CacheModule, CacheStore } from '@nestjs/cache-manager';
import { redisStore } from "cache-manager-redis-store";

const logsFolderPath = 'logs';

// Ensure the logs folder exists, create it if not
if (!fs.existsSync(logsFolderPath)) {
  fs.mkdirSync(logsFolderPath);
}

@Module({
  imports: [
    TypeOrmModule.forRoot(configService.getTypeOrmConfig()),
    CacheModule.registerAsync({
      useFactory: async () => {
        const store = await redisStore({
          socket: {
            host: 'localhost',
            port: 6389,
          },
        });

        return {
          store: store as unknown as CacheStore,
          ttl: 3600,
        };
      },
    }),

    AttendeesModule,
    EventsModule,
    RegistrationModule,
  ],
  controllers: [AppController],
  providers: [AppService, Logger],
})

export class AppModule {}
