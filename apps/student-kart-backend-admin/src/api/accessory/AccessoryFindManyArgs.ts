import { AccessoryWhereInput } from "./AccessoryWhereInput";
import { AccessoryOrderByInput } from "./AccessoryOrderByInput";

export type AccessoryFindManyArgs = {
  where?: AccessoryWhereInput;
  orderBy?: Array<AccessoryOrderByInput>;
  skip?: number;
  take?: number;
};
