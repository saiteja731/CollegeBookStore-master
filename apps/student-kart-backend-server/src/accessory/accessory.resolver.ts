import * as graphql from "@nestjs/graphql";
import { AccessoryResolverBase } from "./base/accessory.resolver.base";
import { Accessory } from "./base/Accessory";
import { AccessoryService } from "./accessory.service";

@graphql.Resolver(() => Accessory)
export class AccessoryResolver extends AccessoryResolverBase {
  constructor(protected readonly service: AccessoryService) {
    super(service);
  }
}
