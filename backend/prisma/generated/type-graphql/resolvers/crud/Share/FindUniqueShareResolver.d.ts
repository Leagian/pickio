import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueShareArgs } from "./args/FindUniqueShareArgs";
import { Share } from "../../../models/Share";
export declare class FindUniqueShareResolver {
    share(ctx: any, info: GraphQLResolveInfo, args: FindUniqueShareArgs): Promise<Share | null>;
}
