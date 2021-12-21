// Automatically generated with Reach 0.1.6 (fb449c94)
/* eslint-disable */
export const _version = '0.1.6';
export const _versionHash = '0.1.6 (fb449c94)';
export const _backendVersion = 5;

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
export async function Caller(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Caller expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Caller expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 6));
  const ctc1 = stdlib.T_Tuple([ctc0]);
  const ctc2 = stdlib.T_Null;
  
  
  const v51 = stdlib.protect(ctc0, await interact.chooseFace(), {
    at: './index.rsh:25:58:application',
    fs: ['at ./index.rsh:24:16:application call to [unknown function] (defined at: ./index.rsh:24:20:function exp)'],
    msg: 'chooseFace',
    who: 'Caller'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v51],
    evt_cnt: 1,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:27:12:dot', stdlib.UInt_max, 0),
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
  const v68 = v67 ? stdlib.checkedBigNumberify('./index.rsh:36:50:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:36:54:decimal', stdlib.UInt_max, 0);
  stdlib.protect(ctc2, await interact.seeOutcome(v68), {
    at: './index.rsh:40:28:application',
    fs: ['at ./index.rsh:39:9:application call to [unknown function] (defined at: ./index.rsh:39:32:function exp)'],
    msg: 'seeOutcome',
    who: 'Caller'
    });
  
  return;
  
  
  
  
  };
export async function Flipper(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Flipper expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Flipper expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
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
    fs: ['at ./index.rsh:30:17:application call to [unknown function] (defined at: ./index.rsh:30:21:function exp)'],
    msg: 'tossCoin',
    who: 'Flipper'
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
      const v68 = v67 ? stdlib.checkedBigNumberify('./index.rsh:36:50:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:36:54:decimal', stdlib.UInt_max, 0);
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
  const v68 = v67 ? stdlib.checkedBigNumberify('./index.rsh:36:50:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:36:54:decimal', stdlib.UInt_max, 0);
  stdlib.protect(ctc2, await interact.seeOutcome(v68), {
    at: './index.rsh:40:28:application',
    fs: ['at ./index.rsh:39:9:application call to [unknown function] (defined at: ./index.rsh:39:32:function exp)'],
    msg: 'seeOutcome',
    who: 'Flipper'
    });
  
  return;
  
  
  
  
  };
const _ALGO = {
  appApproval: `#pragma version 5
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
int 0
extract_uint64
store 1
dup
int 8
extract_uint64
store 2
extract 16 32
store 3
txn NumAppArgs
int 3
==
assert
txna ApplicationArgs 0
btoi
preamble:
// Handler 0
dup
int 0
==
bz l0_afterHandler0
pop
// check step
int 0
load 1
==
assert
// check time
txna ApplicationArgs 1
btoi
dup
int 0
==
swap
load 2
==
||
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
extract 0 32
store 255
dup
extract 32 6
store 254
pop
txn Sender
global CreatorAddress
==
assert
load 255
store 3
// "CheckPay"
// "./index.rsh:27:12:dot"
// "[]"
int 100000
dup
bz l1_checkTxnK
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
l1_checkTxnK:
pop
// "CheckPay"
// "./index.rsh:27:12:dot"
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
l0_afterHandler0:
// Handler 1
dup
int 1
==
bz l2_afterHandler1
pop
// check step
int 1
load 1
==
assert
// check time
txna ApplicationArgs 1
btoi
dup
int 0
==
swap
load 2
==
||
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
// "./index.rsh:34:13:dot"
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
l3_checkTxnK:
pop
txn OnCompletion
int DeleteApplication
==
assert
b updateState
l2_afterHandler1:
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
  appClear: `#pragma version 5
int 0
`,
  escrow: `#pragma version 5
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
  version: 5
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
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
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
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
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
  Bytecode: `0x6080604052604051610771380380610771833981016040819052610022916101f0565b600080556040517fc66acdb923728874ebee448a9b9eabd15173d4d18c34b34ff07100483165b35d90610056908390610293565b60405180910390a161006a341560076100ac565b600160008181554390915560408051602080820184905282518083038201815291830190925280516100a09260029201906100d5565b50504360035550610311565b816100d15760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b8280546100e1906102d6565b90600052602060002090601f0160209004810192826101035760008555610149565b82601f1061011c57805160ff1916838001178555610149565b82800160010185558215610149579182015b8281111561014957825182559160200191906001019061012e565b50610155929150610159565b5090565b5b80821115610155576000815560010161015a565b634e487b7160e01b600052604160045260246000fd5b604080519081016001600160401b03811182821017156101a6576101a661016e565b60405290565b604051602081016001600160401b03811182821017156101a6576101a661016e565b60405160c081016001600160401b03811182821017156101a6576101a661016e565b600081830360e081121561020357600080fd5b61020b610184565b83518152602060c0601f198401121561022357600080fd5b61022b6101ac565b925085603f86011261023c57600080fd5b6102446101ce565b8060e087018881111561025657600080fd5b8388015b8181101561028157805160ff811681146102745760008081fd5b845292840192840161025a565b50508452508101919091529392505050565b815181526020808301515160e08301919060008285015b60068210156102cc57825160ff168152918301916001919091019083016102aa565b5050505092915050565b600181811c908216806102ea57607f821691505b6020821081141561030b57634e487b7160e01b600052602260045260246000fd5b50919050565b610451806103206000396000f3fe6080604052600436106100405760003560e01c80631e93b0f1146100495780635e98b4aa1461006d5780638323075714610080578063ab53f2c61461009557005b3661004757005b005b34801561005557600080fd5b506003545b6040519081526020015b60405180910390f35b61004761007b3660046102fc565b6100b8565b34801561008c57600080fd5b5060015461005a565b3480156100a157600080fd5b506100aa6101e4565b604051610064929190610314565b6100c86001600054146009610281565b6100e2813515806100db57506001548235145b600a610281565b6000808055600280546100f490610371565b80601f016020809104026020016040519081016040528092919081815260200182805461012090610371565b801561016d5780601f106101425761010080835404028352916020019161016d565b820191906000526020600020905b81548152906001019060200180831161015057829003601f168201915b505050505080602001905181019061018591906103a6565b90507ff516135eb9c5a86d1d8f47d7de175a7a8f69a73d380078b261631ebb2d5dfc94826040516101b691906103cf565b60405180910390a16101ca34156008610281565b600080805560018190556101e0906002906102a6565b5050565b6000606060005460028080546101f990610371565b80601f016020809104026020016040519081016040528092919081815260200182805461022590610371565b80156102725780601f1061024757610100808354040283529160200191610272565b820191906000526020600020905b81548152906001019060200180831161025557829003601f168201915b50505050509050915091509091565b816101e05760405163100960cb60e01b81526004810182905260240160405180910390fd5b5080546102b290610371565b6000825580601f106102c2575050565b601f0160209004906000526020600020908101906102e091906102e3565b50565b5b808211156102f857600081556001016102e4565b5090565b600060e0828403121561030e57600080fd5b50919050565b82815260006020604081840152835180604085015260005b818110156103485785810183015185820160600152820161032c565b8181111561035a576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c9082168061038557607f821691505b6020821081141561030e57634e487b7160e01b600052602260045260246000fd5b6000602082840312156103b857600080fd5b815180151581146103c857600080fd5b9392505050565b8135815260e0810160208083018185016000805b600681101561041057823560ff81168082146103fd578384fd5b85525092840192918401916001016103e3565b50505050509291505056fea2646970667358221220accb798c9729aee07cc270152a334f9c3386521305e4d5200cb9e946c1fe0de564736f6c63430008090033`,
  BytecodeLen: 1905,
  Which: `oD`,
  version: 5,
  views: {
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Caller": Caller,
  "Flipper": Flipper
  };
export const _APIs = {
  };
