import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueShareOrThrowArgs } from "./args/FindUniqueShareOrThrowArgs";
import { Share } from "../../../models/Share";
export declare class FindUniqueShareOrThrowResolver {
    getShare(ctx: any, info: GraphQLResolveInfo, args: FindUniqueShareOrThrowArgs): Promise<Share | null>;
}
