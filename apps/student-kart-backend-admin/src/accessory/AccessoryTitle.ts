import { Accessory as TAccessory } from "../api/accessory/Accessory";

export const ACCESSORY_TITLE_FIELD = "id";

export const AccessoryTitle = (record: TAccessory): string => {
  return record.id?.toString() || String(record.id);
};
