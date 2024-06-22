import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AccessoryServiceBase } from "./base/accessory.service.base";

@Injectable()
export class AccessoryService extends AccessoryServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
