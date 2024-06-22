/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { AccessoryWhereInput } from "./AccessoryWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { AccessoryOrderByInput } from "./AccessoryOrderByInput";

@ArgsType()
class AccessoryFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => AccessoryWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => AccessoryWhereInput, { nullable: true })
  @Type(() => AccessoryWhereInput)
  where?: AccessoryWhereInput;

  @ApiProperty({
    required: false,
    type: [AccessoryOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [AccessoryOrderByInput], { nullable: true })
  @Type(() => AccessoryOrderByInput)
  orderBy?: Array<AccessoryOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { AccessoryFindManyArgs as AccessoryFindManyArgs };
