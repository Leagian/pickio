import type { GraphQLResolveInfo } from "graphql";
import { CreateManyShareArgs } from "./args/CreateManyShareArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyShareResolver {
    createManyShare(ctx: any, info: GraphQLResolveInfo, args: CreateManyShareArgs): Promise<AffectedRowsOutput>;
}
