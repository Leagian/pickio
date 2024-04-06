import type { GraphQLResolveInfo } from "graphql";
import { UpdateOneShareArgs } from "./args/UpdateOneShareArgs";
import { Share } from "../../../models/Share";
export declare class UpdateOneShareResolver {
    updateOneShare(ctx: any, info: GraphQLResolveInfo, args: UpdateOneShareArgs): Promise<Share | null>;
}
