/**
 * @flow
 * @relayHash 1e45ffb61544ea4deebfb632800b005c
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type routesOfferingsQueryResponse = {|
  +offerings: ?{| |};
|};
*/


/*
query routesOfferingsQuery {
  offerings {
    ...Offerings_allofferings
  }
}

fragment Offerings_allofferings on OfferingNodeConnection {
  edges {
    node {
      id
      ...Offering_offering
    }
  }
}

fragment Offering_offering on OfferingNode {
  name
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "routesOfferingsQuery",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": null,
        "concreteType": "OfferingNodeConnection",
        "name": "offerings",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "Offerings_allofferings",
            "args": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query"
  },
  "id": null,
  "kind": "Batch",
  "metadata": {},
  "name": "routesOfferingsQuery",
  "query": {
    "argumentDefinitions": [],
    "kind": "Root",
    "name": "routesOfferingsQuery",
    "operation": "query",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": null,
        "concreteType": "OfferingNodeConnection",
        "name": "offerings",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "args": null,
            "concreteType": "OfferingNodeEdge",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "args": null,
                "concreteType": "OfferingNode",
                "name": "node",
                "plural": false,
                "selections": [
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "args": null,
                    "name": "id",
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "args": null,
                    "name": "name",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "text": "query routesOfferingsQuery {\n  offerings {\n    ...Offerings_allofferings\n  }\n}\n\nfragment Offerings_allofferings on OfferingNodeConnection {\n  edges {\n    node {\n      id\n      ...Offering_offering\n    }\n  }\n}\n\nfragment Offering_offering on OfferingNode {\n  name\n}\n"
};

module.exports = batch;
