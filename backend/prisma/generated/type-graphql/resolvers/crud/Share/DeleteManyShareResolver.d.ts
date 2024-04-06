import type { GraphQLResolveInfo } from "graphql";
import { DeleteManyShareArgs } from "./args/DeleteManyShareArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyShareResolver {
    deleteManyShare(ctx: any, info: GraphQLResolveInfo, args: DeleteManyShareArgs): Promise<AffectedRowsOutput>;
}
