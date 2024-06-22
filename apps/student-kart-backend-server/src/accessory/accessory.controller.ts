import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AccessoryService } from "./accessory.service";
import { AccessoryControllerBase } from "./base/accessory.controller.base";

@swagger.ApiTags("accessories")
@common.Controller("accessories")
export class AccessoryController extends AccessoryControllerBase {
  constructor(protected readonly service: AccessoryService) {
    super(service);
  }
}
