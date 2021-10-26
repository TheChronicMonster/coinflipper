// Automatically generated with Reach 0.1.6
/* eslint-disable */
export const _version = '0.1.6';
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
export async function Alice(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Alice expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Alice expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
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
export async function Bob(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Bob expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bob expects to receive an interact object as its second argument.`));}
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
  Bytecode: `0x6080604052604051610757380380610757833981016040819052610022916101ec565b600080556040517fc66acdb923728874ebee448a9b9eabd15173d4d18c34b34ff07100483165b35d9061005690839061028f565b60405180910390a161006a341560076100a8565b600160008181554390915560408051602080820184905282518083038201815291830190925280516100a09260029201906100d1565b50505061030d565b816100cd5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b8280546100dd906102d2565b90600052602060002090601f0160209004810192826100ff5760008555610145565b82601f1061011857805160ff1916838001178555610145565b82800160010185558215610145579182015b8281111561014557825182559160200191906001019061012a565b50610151929150610155565b5090565b5b808211156101515760008155600101610156565b634e487b7160e01b600052604160045260246000fd5b604080519081016001600160401b03811182821017156101a2576101a261016a565b60405290565b604051602081016001600160401b03811182821017156101a2576101a261016a565b60405160c081016001600160401b03811182821017156101a2576101a261016a565b600081830360e08112156101ff57600080fd5b610207610180565b83518152602060c0601f198401121561021f57600080fd5b6102276101a8565b925085603f86011261023857600080fd5b6102406101ca565b8060e087018881111561025257600080fd5b8388015b8181101561027d57805160ff811681146102705760008081fd5b8452928401928401610256565b50508452508101919091529392505050565b815181526020808301515160e08301919060008285015b60068210156102c857825160ff168152918301916001919091019083016102a6565b5050505092915050565b600181811c908216806102e657607f821691505b6020821081141561030757634e487b7160e01b600052602260045260246000fd5b50919050565b61043b8061031c6000396000f3fe6080604052600436106100385760003560e01c80635e98b4aa146100445780638323075714610059578063ab53f2c61461007c57600080fd5b3661003f57005b600080fd5b6100576100523660046102e6565b61009f565b005b34801561006557600080fd5b506001546040519081526020015b60405180910390f35b34801561008857600080fd5b506100916101ca565b6040516100739291906102fe565b6100af6001600054146009610267565b6100c9813515806100c257506001548235145b600a610267565b6000808055600280546100db9061035b565b80601f01602080910402602001604051908101604052809291908181526020018280546101079061035b565b80156101545780601f1061012957610100808354040283529160200191610154565b820191906000526020600020905b81548152906001019060200180831161013757829003601f168201915b505050505080602001905181019061016c9190610390565b90507ff516135eb9c5a86d1d8f47d7de175a7a8f69a73d380078b261631ebb2d5dfc948260405161019d91906103b9565b60405180910390a16101b134156008610267565b600080805560018190556101c790600290610290565b33ff5b6000606060005460028080546101df9061035b565b80601f016020809104026020016040519081016040528092919081815260200182805461020b9061035b565b80156102585780601f1061022d57610100808354040283529160200191610258565b820191906000526020600020905b81548152906001019060200180831161023b57829003601f168201915b50505050509050915091509091565b8161028c5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b50805461029c9061035b565b6000825580601f106102ac575050565b601f0160209004906000526020600020908101906102ca91906102cd565b50565b5b808211156102e257600081556001016102ce565b5090565b600060e082840312156102f857600080fd5b50919050565b82815260006020604081840152835180604085015260005b8181101561033257858101830151858201606001528201610316565b81811115610344576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c9082168061036f57607f821691505b602082108114156102f857634e487b7160e01b600052602260045260246000fd5b6000602082840312156103a257600080fd5b815180151581146103b257600080fd5b9392505050565b8135815260e0810160208083018185016000805b60068110156103fa57823560ff81168082146103e7578384fd5b85525092840192918401916001016103cd565b50505050509291505056fea2646970667358221220e37188f2ce056f564f6f2e0b74f19fe2e49a040b829e9938b7bdc0148698f49c64736f6c63430008090033`,
  BytecodeLen: 1879,
  Which: `oD`,
  version: 4,
  views: {
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Alice": Alice,
  "Bob": Bob
  };
export const _APIs = {
  };
