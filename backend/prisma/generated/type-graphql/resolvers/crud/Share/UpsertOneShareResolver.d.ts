import type { GraphQLResolveInfo } from "graphql";
import { UpsertOneShareArgs } from "./args/UpsertOneShareArgs";
import { Share } from "../../../models/Share";
export declare class UpsertOneShareResolver {
    upsertOneShare(ctx: any, info: GraphQLResolveInfo, args: UpsertOneShareArgs): Promise<Share>;
}
