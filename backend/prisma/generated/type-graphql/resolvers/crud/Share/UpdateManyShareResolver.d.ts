import type { GraphQLResolveInfo } from "graphql";
import { UpdateManyShareArgs } from "./args/UpdateManyShareArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyShareResolver {
    updateManyShare(ctx: any, info: GraphQLResolveInfo, args: UpdateManyShareArgs): Promise<AffectedRowsOutput>;
}
