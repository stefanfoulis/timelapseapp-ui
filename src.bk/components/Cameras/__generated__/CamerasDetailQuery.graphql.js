/**
 * @flow
 * @relayHash 7576ef6b23bef54789eb83d6e0ced339
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type CamerasDetailQueryResponse = {|
  +camera: ?{| |};
|};
*/


/*
query CamerasDetailQuery(
  $cameraId: ID!
) {
  camera(id: $cameraId) {
    ...CameraDetails_camera
    id
  }
}

fragment CameraDetails_camera on CameraNode {
  id
  name
  notes
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "cameraId",
        "type": "ID!",
        "defaultValue": null
      }
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "CamerasDetailQuery",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "id",
            "variableName": "cameraId",
            "type": "ID!"
          }
        ],
        "concreteType": "CameraNode",
        "name": "camera",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "CameraDetails_camera",
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
  "name": "CamerasDetailQuery",
  "query": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "cameraId",
        "type": "ID!",
        "defaultValue": null
      }
    ],
    "kind": "Root",
    "name": "CamerasDetailQuery",
    "operation": "query",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "id",
            "variableName": "cameraId",
            "type": "ID!"
          }
        ],
        "concreteType": "CameraNode",
        "name": "camera",
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
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "notes",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "text": "query CamerasDetailQuery(\n  $cameraId: ID!\n) {\n  camera(id: $cameraId) {\n    ...CameraDetails_camera\n    id\n  }\n}\n\nfragment CameraDetails_camera on CameraNode {\n  id\n  name\n  notes\n}\n"
};

module.exports = batch;
