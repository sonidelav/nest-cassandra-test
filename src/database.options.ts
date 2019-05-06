import { auth } from "cassandra-driver";
import { ExpressCassandraModuleOptions } from "@iaminfinity/express-cassandra";

export default {
    clientOptions: {
        contactPoints: ["localhost"],
        keyspace: "test",
        protocolOptions: {
            post: 9042,
        },
        queryOptions: {
            consistency: 1,
        },
        authProvider: new auth.PlainTextAuthProvider("test", "test"),
    },
    ormOptions: {
        createKeyspace: true,
        defaultReplicationStrategy: {
            class: "SimpleStrategy",
            replication_factor: 1,
        },
        migration: "alter",
    },
} as ExpressCassandraModuleOptions;
