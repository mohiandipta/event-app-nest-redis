import { Module } from '@nestjs/common';
import { EventsService } from './events.service';
import { EventsController } from './events.controller';
import { Event } from './entities/event.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CacheModule, CacheStore } from '@nestjs/cache-manager';
import { redisStore } from "cache-manager-redis-store";

@Module({
  imports: [
    TypeOrmModule.forFeature([Event]),
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
  controllers: [EventsController],
  providers: [EventsService],
})
export class EventsModule {}
