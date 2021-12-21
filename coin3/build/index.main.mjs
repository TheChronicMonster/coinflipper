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
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 6));
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1, ctc2]
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
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 6));
  const ctc2 = stdlib.T_Tuple([ctc1]);
  const ctc3 = stdlib.T_Null;
  
  
  const v69 = stdlib.protect(ctc0, interact.wager, 'for Caller\'s interact field wager');
  
  const v72 = stdlib.protect(ctc1, await interact.chooseFace(), {
    at: './index.rsh:28:58:application',
    fs: ['at ./index.rsh:26:16:application call to [unknown function] (defined at: ./index.rsh:26:20:function exp)'],
    msg: 'chooseFace',
    who: 'Caller'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v69, v72],
    evt_cnt: 2,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:30:12:dot', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc0, ctc1],
    pay: [v69, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
      
      const {data: [v74, v75], secs: v77, time: v76, didSend: v27, from: v73 } = txn1;
      
      sim_r.txns.push({
        amt: v74,
        kind: 'to',
        tok: undefined
        });
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined,
    tys: [ctc0, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [v74, v75], secs: v77, time: v76, didSend: v27, from: v73 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 1,
    out_tys: [ctc1],
    timeoutAt: undefined,
    waitIfNotPresent: false
    }));
  const {data: [v84], secs: v86, time: v85, didSend: v38, from: v83 } = txn2;
  ;
  const v89 = stdlib.digest(ctc2, [v75]);
  const v90 = stdlib.digest(ctc2, [v84]);
  const v91 = stdlib.digestEq(v89, v90);
  const v92 = v91 ? stdlib.checkedBigNumberify('./index.rsh:42:50:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:42:54:decimal', stdlib.UInt_max, 0);
  const v93 = stdlib.eq(v92, stdlib.checkedBigNumberify('./index.rsh:44:18:decimal', stdlib.UInt_max, 1));
  const v94 = [stdlib.checkedBigNumberify('./index.rsh:44:30:decimal', stdlib.UInt_max, 2), stdlib.checkedBigNumberify('./index.rsh:44:38:decimal', stdlib.UInt_max, 0)];
  const v95 = [stdlib.checkedBigNumberify('./index.rsh:45:30:decimal', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('./index.rsh:45:38:decimal', stdlib.UInt_max, 2)];
  const v96 = v93 ? v94 : v95;
  const v97 = v96[stdlib.checkedBigNumberify('./index.rsh:43:22:array', stdlib.UInt_max, 0)];
  const v98 = v96[stdlib.checkedBigNumberify('./index.rsh:43:22:array', stdlib.UInt_max, 1)];
  const v99 = stdlib.mul(v97, v74);
  ;
  const v104 = stdlib.mul(v98, v74);
  ;
  stdlib.protect(ctc3, await interact.seeOutcome(v92), {
    at: './index.rsh:51:28:application',
    fs: ['at ./index.rsh:50:9:application call to [unknown function] (defined at: ./index.rsh:50:32:function exp)'],
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
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 6));
  const ctc2 = stdlib.T_Null;
  const ctc3 = stdlib.T_Tuple([ctc1]);
  const ctc4 = stdlib.T_Address;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 0,
    out_tys: [ctc0, ctc1],
    timeoutAt: undefined,
    waitIfNotPresent: false
    }));
  const {data: [v74, v75], secs: v77, time: v76, didSend: v27, from: v73 } = txn1;
  ;
  stdlib.protect(ctc2, await interact.acceptWager(v74), {
    at: './index.rsh:35:29:application',
    fs: ['at ./index.rsh:34:17:application call to [unknown function] (defined at: ./index.rsh:34:21:function exp)'],
    msg: 'acceptWager',
    who: 'Flipper'
    });
  const v82 = stdlib.protect(ctc1, await interact.tossCoin(), {
    at: './index.rsh:37:56:application',
    fs: ['at ./index.rsh:34:17:application call to [unknown function] (defined at: ./index.rsh:34:21:function exp)'],
    msg: 'tossCoin',
    who: 'Flipper'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v73, v74, v75, v82],
    evt_cnt: 1,
    funcNum: 1,
    lct: v76,
    onlyIf: true,
    out_tys: [ctc1],
    pay: [v74, []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
      
      const {data: [v84], secs: v86, time: v85, didSend: v38, from: v83 } = txn2;
      
      sim_r.txns.push({
        amt: v74,
        kind: 'to',
        tok: undefined
        });
      const v89 = stdlib.digest(ctc3, [v75]);
      const v90 = stdlib.digest(ctc3, [v84]);
      const v91 = stdlib.digestEq(v89, v90);
      const v92 = v91 ? stdlib.checkedBigNumberify('./index.rsh:42:50:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:42:54:decimal', stdlib.UInt_max, 0);
      const v93 = stdlib.eq(v92, stdlib.checkedBigNumberify('./index.rsh:44:18:decimal', stdlib.UInt_max, 1));
      const v94 = [stdlib.checkedBigNumberify('./index.rsh:44:30:decimal', stdlib.UInt_max, 2), stdlib.checkedBigNumberify('./index.rsh:44:38:decimal', stdlib.UInt_max, 0)];
      const v95 = [stdlib.checkedBigNumberify('./index.rsh:45:30:decimal', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('./index.rsh:45:38:decimal', stdlib.UInt_max, 2)];
      const v96 = v93 ? v94 : v95;
      const v97 = v96[stdlib.checkedBigNumberify('./index.rsh:43:22:array', stdlib.UInt_max, 0)];
      const v98 = v96[stdlib.checkedBigNumberify('./index.rsh:43:22:array', stdlib.UInt_max, 1)];
      const v99 = stdlib.mul(v97, v74);
      sim_r.txns.push({
        amt: v99,
        kind: 'from',
        to: v73,
        tok: undefined
        });
      const v104 = stdlib.mul(v98, v74);
      sim_r.txns.push({
        amt: v104,
        kind: 'from',
        to: v83,
        tok: undefined
        });
      sim_r.txns.push({
        kind: 'halt',
        tok: undefined
        })
      sim_r.isHalt = true;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined,
    tys: [ctc4, ctc0, ctc1, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [v84], secs: v86, time: v85, didSend: v38, from: v83 } = txn2;
  ;
  const v89 = stdlib.digest(ctc3, [v75]);
  const v90 = stdlib.digest(ctc3, [v84]);
  const v91 = stdlib.digestEq(v89, v90);
  const v92 = v91 ? stdlib.checkedBigNumberify('./index.rsh:42:50:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:42:54:decimal', stdlib.UInt_max, 0);
  const v93 = stdlib.eq(v92, stdlib.checkedBigNumberify('./index.rsh:44:18:decimal', stdlib.UInt_max, 1));
  const v94 = [stdlib.checkedBigNumberify('./index.rsh:44:30:decimal', stdlib.UInt_max, 2), stdlib.checkedBigNumberify('./index.rsh:44:38:decimal', stdlib.UInt_max, 0)];
  const v95 = [stdlib.checkedBigNumberify('./index.rsh:45:30:decimal', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('./index.rsh:45:38:decimal', stdlib.UInt_max, 2)];
  const v96 = v93 ? v94 : v95;
  const v97 = v96[stdlib.checkedBigNumberify('./index.rsh:43:22:array', stdlib.UInt_max, 0)];
  const v98 = v96[stdlib.checkedBigNumberify('./index.rsh:43:22:array', stdlib.UInt_max, 1)];
  const v99 = stdlib.mul(v97, v74);
  ;
  const v104 = stdlib.mul(v98, v74);
  ;
  stdlib.protect(ctc2, await interact.seeOutcome(v92), {
    at: './index.rsh:51:28:application',
    fs: ['at ./index.rsh:50:9:application call to [unknown function] (defined at: ./index.rsh:50:32:function exp)'],
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
int 46
==
assert
dup
extract 0 32
store 255
dup
int 32
extract_uint64
store 254
dup
extract 40 6
store 253
pop
txn Sender
global CreatorAddress
==
assert
load 255
store 3
// "CheckPay"
// "./index.rsh:30:12:dot"
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
// "./index.rsh:30:12:dot"
// "[]"
load 254
dup
bz l2_checkTxnK
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
l2_checkTxnK:
pop
txn Sender
load 254
itob
concat
load 253
concat
int 1
bzero
dig 1
extract 0 46
app_global_put
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
bz l3_afterHandler1
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
int 1
bzero
app_global_get
dup
extract 0 32
store 255
dup
int 32
extract_uint64
store 254
dup
extract 40 6
store 253
pop
txna ApplicationArgs 2
dup
len
int 6
==
assert
dup
store 252
pop
// "CheckPay"
// "./index.rsh:39:13:dot"
// "[]"
load 254
dup
bz l4_checkTxnK
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
l4_checkTxnK:
pop
byte base64(AAAAAAAAAAAAAAAAAAAAAg==)
byte base64(AAAAAAAAAAIAAAAAAAAAAA==)
int 0
int 1
load 253
sha256
load 252
sha256
==
select
int 1
==
select
dup
store 251
int 0
extract_uint64
load 254
*
dup
bz l5_checkTxnK
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
load 255
dig 1
gtxns Receiver
==
assert
l5_checkTxnK:
pop
load 251
int 8
extract_uint64
load 254
*
dup
bz l6_checkTxnK
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
txn Sender
dig 1
gtxns Receiver
==
assert
l6_checkTxnK:
pop
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
l7_checkTxnK:
pop
txn OnCompletion
int DeleteApplication
==
assert
b updateState
l3_afterHandler1:
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
  stateKeys: 1,
  stateSize: 46,
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
                "internalType": "uint256",
                "name": "v74",
                "type": "uint256"
              },
              {
                "internalType": "uint8[6]",
                "name": "v75",
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
                "internalType": "uint256",
                "name": "v74",
                "type": "uint256"
              },
              {
                "internalType": "uint8[6]",
                "name": "v75",
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
                "name": "v84",
                "type": "uint8[6]"
              }
            ],
            "internalType": "struct T4",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T5",
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
                "name": "v84",
                "type": "uint8[6]"
              }
            ],
            "internalType": "struct T4",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T5",
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
  Bytecode: `0x608060405260405162000b7638038062000b76833981016040819052620000269162000265565b600080556040517f84094789fb5a2fd1c83da9f09dd044164cde72b30f500215b0b43c22431ab6b6906200005c9083906200034e565b60405180910390a1602081015151620000799034146007620000eb565b6200008362000115565b338152602080830180515182840152518101516040808401919091526001600081905543905551620000b8918391016200037c565b60405160208183030381529060405260029080519060200190620000de9291906200013b565b50504360035550620003ea565b81620001115760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b604080516060810182526000808252602082015290810162000136620001ca565b905290565b8280546200014990620003ad565b90600052602060002090601f0160209004810192826200016d5760008555620001b8565b82601f106200018857805160ff1916838001178555620001b8565b82800160010185558215620001b8579182015b82811115620001b85782518255916020019190600101906200019b565b50620001c6929150620001e8565b5090565b6040518060c001604052806006906020820280368337509192915050565b5b80821115620001c65760008155600101620001e9565b634e487b7160e01b600052604160045260246000fd5b604080519081016001600160401b03811182821017156200023a576200023a620001ff565b60405290565b60405160c081016001600160401b03811182821017156200023a576200023a620001ff565b6000818303610100808212156200027b57600080fd5b6200028562000215565b84518152602060e0601f19850112156200029e57600080fd5b620002a862000215565b935080860151845286605f870112620002c057600080fd5b620002ca62000240565b928601928088851115620002dd57600080fd5b604088015b858110156200030c57805160ff81168114620002fe5760008081fd5b8352918301918301620002e2565b508583015250810192909252509392505050565b8060005b60068110156200034857815160ff1684526020938401939091019060010162000324565b50505050565b81518152602080830151805182840152015161010082019062000375604084018262000320565b5092915050565b81516001600160a01b0316815260208083015190820152604080830151610100830191620003759084018262000320565b600181811c90821680620003c257607f821691505b60208210811415620003e457634e487b7160e01b600052602260045260246000fd5b50919050565b61077c80620003fa6000396000f3fe6080604052600436106100405760003560e01c80631e93b0f1146100495780635e98b4aa1461006d5780638323075714610080578063ab53f2c61461009557005b3661004757005b005b34801561005557600080fd5b506003545b6040519081526020015b60405180910390f35b61004761007b3660046104b1565b6100b8565b34801561008c57600080fd5b5060015461005a565b3480156100a157600080fd5b506100aa61032e565b6040516100649291906104c9565b6100c860016000541460096103cb565b6100e2813515806100db57506001548235145b600a6103cb565b6000808055600280546100f490610526565b80601f016020809104026020016040519081016040528092919081815260200182805461012090610526565b801561016d5780601f106101425761010080835404028352916020019161016d565b820191906000526020600020905b81548152906001019060200180831161015057829003601f168201915b505050505080602001905181019061018591906105cc565b905061018f6103f4565b7ff516135eb9c5a86d1d8f47d7de175a7a8f69a73d380078b261631ebb2d5dfc94836040516101be919061066a565b60405180910390a16101d78260200151341460086103cb565b80516002908190528151600060209182018190528184018051919091525181019190915260405160019161020f9186820191016106b0565b60408051601f1981840301815282825280516020918201209186015191926102389291016106ee565b6040516020818303038152906040528051906020012060001c1461025d576000610260565b60015b1461026f578060200151610272565b80515b604082018190528251602084015191516001600160a01b03909116916108fc9161029c9190610719565b6040518115909202916000818181858888f193505050501580156102c4573d6000803e3d6000fd5b50336001600160a01b03166108fc83602001518360400151602001516102ea9190610719565b6040518115909202916000818181858888f19350505050158015610312573d6000803e3d6000fd5b50600080805560018190556103299060029061045b565b505050565b60006060600054600280805461034390610526565b80601f016020809104026020016040519081016040528092919081815260200182805461036f90610526565b80156103bc5780601f10610391576101008083540402835291602001916103bc565b820191906000526020600020905b81548152906001019060200180831161039f57829003601f168201915b50505050509050915091509091565b816103f05760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b6040805160a08101909152600060608201818152608083019190915281908152602001610434604051806040016040528060008152602001600081525090565b8152602001610456604051806040016040528060008152602001600081525090565b905290565b50805461046790610526565b6000825580601f10610477575050565b601f0160209004906000526020600020908101906104959190610498565b50565b5b808211156104ad5760008155600101610499565b5090565b600060e082840312156104c357600080fd5b50919050565b82815260006020604081840152835180604085015260005b818110156104fd578581018301518582016060015282016104e1565b8181111561050f576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c9082168061053a57607f821691505b602082108114156104c357634e487b7160e01b600052602260045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6040516060810167ffffffffffffffff811182821017156105945761059461055b565b60405290565b60405160c0810167ffffffffffffffff811182821017156105945761059461055b565b60ff8116811461049557600080fd5b60006101008083850312156105e057600080fd5b6105e8610571565b83516001600160a01b03811681146105ff57600080fd5b815260208481015181830152605f8501861361061a57600080fd5b61062261059a565b92850192808785111561063457600080fd5b604087015b8581101561065957805161064c816105bd565b8352918301918301610639565b506040840152509095945050505050565b8135815260e08101602080830181850160005b60068110156106a6578135610691816105bd565b60ff168352918301919083019060010161067d565b5050505092915050565b60c08101818360005b60068110156106e55781356106cd816105bd565b60ff16835260209283019291909101906001016106b9565b50505092915050565b60c08101818360005b60068110156106e557815160ff168352602092830192909101906001016106f7565b600081600019048311821515161561074157634e487b7160e01b600052601160045260246000fd5b50029056fea264697066735822122003ad4b4184667de857a7df4e08f1459c9bfbab0ecee1f602b785a3238d02596664736f6c63430008090033`,
  BytecodeLen: 2934,
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
