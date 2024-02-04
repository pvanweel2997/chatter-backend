import { Module } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { ModelDefinition, MongooseModule } from '@nestjs/mongoose'
import mongoose from "mongoose";

@Module({
    imports: [MongooseModule.forRootAsync({
        useFactory: (configService : ConfigService) => ({
            uri: configService.get('MONGODB_URI')
        }),
        inject : [ConfigService]
    })]
})
export class DatbaseModule {
    static forFeature(models: ModelDefinition[]) {
        return MongooseModule.forFeature(models)
    }
}