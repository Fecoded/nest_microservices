import { AuthModule, RmqModule } from "@app/common";
import { Module } from "@nestjs/common";
import * as joi from "joi";
import { ConfigModule } from "@nestjs/config";
import { BillingController } from "./billing.controller";
import { BillingService } from "./billing.service";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: joi.object({
        RABBIT_MQ_URI: joi.string().required(),
        RABBIT_MQ_BILLING_QUEUE: joi.string().required(),
      }),
    }),
    RmqModule,
    AuthModule,
  ],
  controllers: [BillingController],
  providers: [BillingService],
})
export class BillingModule {}
