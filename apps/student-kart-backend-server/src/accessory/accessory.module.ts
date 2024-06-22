import { Module } from "@nestjs/common";
import { AccessoryModuleBase } from "./base/accessory.module.base";
import { AccessoryService } from "./accessory.service";
import { AccessoryController } from "./accessory.controller";
import { AccessoryResolver } from "./accessory.resolver";

@Module({
  imports: [AccessoryModuleBase],
  controllers: [AccessoryController],
  providers: [AccessoryService, AccessoryResolver],
  exports: [AccessoryService],
})
export class AccessoryModule {}
