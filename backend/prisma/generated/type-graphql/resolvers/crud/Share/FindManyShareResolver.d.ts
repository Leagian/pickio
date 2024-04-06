import type { GraphQLResolveInfo } from "graphql";
import { FindManyShareArgs } from "./args/FindManyShareArgs";
import { Share } from "../../../models/Share";
export declare class FindManyShareResolver {
    shares(ctx: any, info: GraphQLResolveInfo, args: FindManyShareArgs): Promise<Share[]>;
}
