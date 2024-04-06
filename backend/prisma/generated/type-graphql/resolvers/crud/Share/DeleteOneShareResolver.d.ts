import type { GraphQLResolveInfo } from "graphql";
import { DeleteOneShareArgs } from "./args/DeleteOneShareArgs";
import { Share } from "../../../models/Share";
export declare class DeleteOneShareResolver {
    deleteOneShare(ctx: any, info: GraphQLResolveInfo, args: DeleteOneShareArgs): Promise<Share | null>;
}
