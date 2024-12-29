import { Module } from '@nestjs/common';
import { AttendeesService } from './attendees.service';
import { AttendeesController } from './attendees.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Attendee } from './entities/attendee.entity';
import { CacheModule, CacheStore } from '@nestjs/cache-manager';
import { redisStore } from "cache-manager-redis-store";

@Module({
  imports: [
    TypeOrmModule.forFeature([Attendee]),
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
  ],
  controllers: [AttendeesController],
  providers: [AttendeesService],
})
export class AttendeesModule {}
