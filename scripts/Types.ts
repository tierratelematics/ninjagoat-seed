export type MasterModel = {
    appTitle: string;
}

export type IndexModel = {}

export type Account = {
    id: string;
    name: string;
    status?: "ACTIVE" | "DELETED"
}