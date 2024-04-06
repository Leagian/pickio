import type { GraphQLResolveInfo } from "graphql";
import { CreateOneShareArgs } from "./args/CreateOneShareArgs";
import { Share } from "../../../models/Share";
export declare class CreateOneShareResolver {
    createOneShare(ctx: any, info: GraphQLResolveInfo, args: CreateOneShareArgs): Promise<Share>;
}
