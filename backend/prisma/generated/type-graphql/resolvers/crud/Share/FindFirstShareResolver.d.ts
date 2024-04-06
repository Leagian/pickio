import type { GraphQLResolveInfo } from "graphql";
import { FindFirstShareArgs } from "./args/FindFirstShareArgs";
import { Share } from "../../../models/Share";
export declare class FindFirstShareResolver {
    findFirstShare(ctx: any, info: GraphQLResolveInfo, args: FindFirstShareArgs): Promise<Share | null>;
}
