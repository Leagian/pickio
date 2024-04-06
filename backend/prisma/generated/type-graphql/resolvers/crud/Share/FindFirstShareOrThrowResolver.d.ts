import type { GraphQLResolveInfo } from "graphql";
import { FindFirstShareOrThrowArgs } from "./args/FindFirstShareOrThrowArgs";
import { Share } from "../../../models/Share";
export declare class FindFirstShareOrThrowResolver {
    findFirstShareOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindFirstShareOrThrowArgs): Promise<Share | null>;
}
