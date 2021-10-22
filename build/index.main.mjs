// Automatically generated with Reach 0.1.5
/* eslint-disable */
export const _version = '0.1.5';
export const _backendVersion = 3;


export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };

export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  
  return {
    infos: {
      },
    views: {
      1: []
      }
    };
  
  };

export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };

export async function Alice(ctc, interact) {
  if (typeof(ctc) !== 'object' || ctc.sendrecv === undefined) {
    return Promise.reject(new Error(`The backend for Alice expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Alice expects to receive an interact object as its second argument.`));}
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 6));
  const ctc1 = stdlib.T_Tuple([ctc0]);
  const ctc2 = stdlib.T_Null;
  
  
  const v51 = stdlib.protect(ctc0, await interact.chooseFace(), {
    at: './index.rsh:25:57:application',
    fs: ['at ./index.rsh:24:15:application call to [unknown function] (defined at: ./index.rsh:24:19:function exp)'],
    msg: 'chooseFace',
    who: 'Alice'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v51],
    evt_cnt: 1,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:27:11:dot', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
      
      const {data: [v53], secs: v55, time: v54, didSend: v24, from: v52 } = txn1;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
        kind: 'to',
        tok: undefined
        });
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined,
    tys: [ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v53], secs: v55, time: v54, didSend: v24, from: v52 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 1,
    out_tys: [ctc0],
    timeoutAt: undefined,
    waitIfNotPresent: false
    }));
  const {data: [v61], secs: v63, time: v62, didSend: v34, from: v60 } = txn2;
  ;
  const v65 = stdlib.digest(ctc1, [v53]);
  const v66 = stdlib.digest(ctc1, [v61]);
  const v67 = stdlib.digestEq(v65, v66);
  const v68 = v67 ? stdlib.checkedBigNumberify('./index.rsh:36:49:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:36:53:decimal', stdlib.UInt_max, 0);
  stdlib.protect(ctc2, await interact.seeOutcome(v68), {
    at: './index.rsh:40:28:application',
    fs: ['at ./index.rsh:39:9:application call to [unknown function] (defined at: ./index.rsh:39:27:function exp)'],
    msg: 'seeOutcome',
    who: 'Alice'
    });
  
  return;
  
  
  };
export async function Bob(ctc, interact) {
  if (typeof(ctc) !== 'object' || ctc.sendrecv === undefined) {
    return Promise.reject(new Error(`The backend for Bob expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bob expects to receive an interact object as its second argument.`));}
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 6));
  const ctc1 = stdlib.T_Tuple([ctc0]);
  const ctc2 = stdlib.T_Null;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 0,
    out_tys: [ctc0],
    timeoutAt: undefined,
    waitIfNotPresent: false
    }));
  const {data: [v53], secs: v55, time: v54, didSend: v24, from: v52 } = txn1;
  ;
  const v59 = stdlib.protect(ctc0, await interact.tossCoin(), {
    at: './index.rsh:32:56:application',
    fs: ['at ./index.rsh:30:13:application call to [unknown function] (defined at: ./index.rsh:30:17:function exp)'],
    msg: 'tossCoin',
    who: 'Bob'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v59],
    evt_cnt: 1,
    funcNum: 1,
    lct: v54,
    onlyIf: true,
    out_tys: [ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
      
      const {data: [v61], secs: v63, time: v62, didSend: v34, from: v60 } = txn2;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
        kind: 'to',
        tok: undefined
        });
      const v65 = stdlib.digest(ctc1, [v53]);
      const v66 = stdlib.digest(ctc1, [v61]);
      const v67 = stdlib.digestEq(v65, v66);
      const v68 = v67 ? stdlib.checkedBigNumberify('./index.rsh:36:49:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:36:53:decimal', stdlib.UInt_max, 0);
      sim_r.txns.push({
        kind: 'halt',
        tok: undefined
        })
      sim_r.isHalt = true;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined,
    tys: [ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v61], secs: v63, time: v62, didSend: v34, from: v60 } = txn2;
  ;
  const v65 = stdlib.digest(ctc1, [v53]);
  const v66 = stdlib.digest(ctc1, [v61]);
  const v67 = stdlib.digestEq(v65, v66);
  const v68 = v67 ? stdlib.checkedBigNumberify('./index.rsh:36:49:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:36:53:decimal', stdlib.UInt_max, 0);
  stdlib.protect(ctc2, await interact.seeOutcome(v68), {
    at: './index.rsh:40:28:application',
    fs: ['at ./index.rsh:39:9:application call to [unknown function] (defined at: ./index.rsh:39:27:function exp)'],
    msg: 'seeOutcome',
    who: 'Bob'
    });
  
  return;
  
  
  };

const _ALGO = {
  appApproval: `#pragma version 4
txn RekeyTo
global ZeroAddress
==
assert
txn Lease
global ZeroAddress
==
assert
int 0
store 0
txn ApplicationID
bz alloc
byte base64()
app_global_get
dup
substring 0 8
btoi
store 1
dup
substring 8 16
btoi
store 2
substring 16 48
store 3
txn NumAppArgs
int 3
==
assert
txna ApplicationArgs 0
btoi
// Handler 0
dup
int 0
==
bz l0
pop
// check step
int 0
load 1
==
assert
// check time
txna ApplicationArgs 1
btoi
load 2
==
assert
byte base64()
pop
txna ApplicationArgs 2
dup
len
int 38
==
assert
dup
substring 0 32
store 255
dup
substring 32 38
store 254
pop
txn Sender
global CreatorAddress
==
assert
load 255
store 3
// "CheckPay"
// "./index.rsh:27:11:dot"
// "[]"
int 100000
dup
bz l1
load 0
dup
int 1
+
store 0
swap
dig 1
gtxns Amount
==
assert
int pay
dig 1
gtxns TypeEnum
==
assert
int 0
dig 1
gtxns Fee
==
assert
global ZeroAddress
dig 1
gtxns Lease
==
assert
global ZeroAddress
dig 1
gtxns RekeyTo
==
assert
load 3
dig 1
gtxns Receiver
==
assert
l1:
pop
// "CheckPay"
// "./index.rsh:27:11:dot"
// "[]"
byte base64()
pop
int 1
store 1
global Round
store 2
txn OnCompletion
int NoOp
==
assert
b updateState
l0:
// Handler 1
dup
int 1
==
bz l2
pop
// check step
int 1
load 1
==
assert
// check time
txna ApplicationArgs 1
btoi
load 2
==
assert
byte base64()
pop
txna ApplicationArgs 2
dup
len
int 6
==
assert
dup
store 255
pop
// "CheckPay"
// "./index.rsh:34:9:dot"
// "[]"
int 0
load 0
dup
int 1
+
store 0
swap
dig 1
gtxns Amount
==
assert
int pay
dig 1
gtxns TypeEnum
==
assert
int 0
dig 1
gtxns Fee
==
assert
global ZeroAddress
dig 1
gtxns Lease
==
assert
global ZeroAddress
dig 1
gtxns RekeyTo
==
assert
load 3
dig 1
gtxns Sender
==
assert
global CreatorAddress
dig 1
gtxns CloseRemainderTo
==
assert
l3:
pop
txn OnCompletion
int DeleteApplication
==
assert
b updateState
l2:
int 0
assert
updateState:
byte base64()
load 1
itob
load 2
itob
load 3
concat
concat
app_global_put
checkSize:
load 0
dup
dup
int 1
+
global GroupSize
==
assert
txn GroupIndex
==
assert
int 1000
*
txn Fee
<=
assert
done:
int 1
return
alloc:
txn OnCompletion
int NoOp
==
assert
int 0
store 1
int 0
store 2
global ZeroAddress
store 3
b updateState
`,
  appClear: `#pragma version 4
int 0
`,
  escrow: `#pragma version 4
global GroupSize
int 1
-
dup
gtxns TypeEnum
int appl
==
assert
gtxns ApplicationID
int {{ApplicationID}}
==
assert
done:
int 1
`,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 0,
  stateSize: 0,
  unsupported: [],
  version: 4
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint8[6]",
                "name": "v53",
                "type": "uint8[6]"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint8[6]",
                "name": "v53",
                "type": "uint8[6]"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint8[6]",
                "name": "v61",
                "type": "uint8[6]"
              }
            ],
            "internalType": "struct T3",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T4",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e1",
    "type": "event"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint8[6]",
                "name": "v61",
                "type": "uint8[6]"
              }
            ],
            "internalType": "struct T3",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T4",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405260405161062c38038061062c8339810160408190526100229161016a565b600080556040517fc66acdb923728874ebee448a9b9eabd15173d4d18c34b34ff07100483165b35d90610056908390610214565b60405180910390a161006a341560076100a8565b600160008181554390915560408051602080820184905282518083038201815291830190925280516100a09260029201906100d1565b505050610314565b816100cd5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b8280546100dd906102c3565b90600052602060002090601f0160209004810192826100ff5760008555610145565b82601f1061011857805160ff1916838001178555610145565b82800160010185558215610145579182015b8281111561014557825182559160200191906001019061012a565b50610151929150610155565b5090565b5b808211156101515760008155600101610156565b600081830360e081121561017d57600080fd5b610185610257565b83518152602060c0601f198401121561019d57600080fd5b6101a561027f565b925085603f8601126101b657600080fd5b6101be6102a1565b808287018860e0890111156101d257600080fd5b6000805b600681101561020157825160ff811681146101ef578283fd5b855293850193918501916001016101d6565b5050508452508101919091529392505050565b815181526020808301515160e08301919060008285015b600682101561024d57825160ff1681529183019160019190910190830161022b565b5050505092915050565b604080519081016001600160401b0381118282101715610279576102796102fe565b60405290565b604051602081016001600160401b0381118282101715610279576102796102fe565b60405160c081016001600160401b0381118282101715610279576102796102fe565b600181811c908216806102d757607f821691505b602082108114156102f857634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052604160045260246000fd5b610309806103236000396000f3fe60806040526004361061002d5760003560e01c80635e98b4aa14610039578063832307571461004e57600080fd5b3661003457005b600080fd5b61004c61004736600461023a565b610070565b005b34801561005a57600080fd5b5060015460405190815260200160405180910390f35b6100806001600054146009610192565b60015461009190823514600a610192565b6000808055600280546100a39061029e565b80601f01602080910402602001604051908101604052809291908181526020018280546100cf9061029e565b801561011c5780601f106100f15761010080835404028352916020019161011c565b820191906000526020600020905b8154815290600101906020018083116100ff57829003601f168201915b50505050508060200190518101906101349190610211565b90507ff516135eb9c5a86d1d8f47d7de175a7a8f69a73d380078b261631ebb2d5dfc94826040516101659190610252565b60405180910390a161017934156008610192565b6000808055600181905561018f906002906101bb565b33ff5b816101b75760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b5080546101c79061029e565b6000825580601f106101d7575050565b601f0160209004906000526020600020908101906101f591906101f8565b50565b5b8082111561020d57600081556001016101f9565b5090565b60006020828403121561022357600080fd5b8151801515811461023357600080fd5b9392505050565b600060e0828403121561024c57600080fd5b50919050565b8135815260e0810160208083018185016000805b600681101561029357823560ff8116808214610280578384fd5b8552509284019291840191600101610266565b505050505092915050565b600181811c908216806102b257607f821691505b6020821081141561024c57634e487b7160e01b600052602260045260246000fdfea2646970667358221220fb395f2f9b3ec5be710324566f49af1338803310bdd6582ef881e804eca123d364736f6c63430008070033`,
  BytecodeLen: 1580,
  Which: `oD`,
  version: 3,
  views: {
    }
  };

export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };

