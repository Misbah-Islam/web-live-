'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "9b159f4cb748376eeb835e082ae2bd88",
".git/config": "5b83c005785649b743098bc52cb176f3",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "a79d282493a8c5ecbfcb24cf3c9935e4",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "2057ebd24b7e9a049d899217c89f4c59",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "cd98efabd4c078a5f16eaaeb84634a08",
".git/logs/refs/heads/gh-pages": "a472d8057f16a00aaaddc528709d4d4c",
".git/logs/refs/heads/master": "d66d9a39ee9c820548f271c33dc08a18",
".git/logs/refs/remotes/origin/HEAD": "686eb35c440b557cc741ede7c8a2d3d8",
".git/logs/refs/remotes/origin/master": "7f0cf92fa641a7f2fccc74f59a3f2b3a",
".git/objects/03/77f3e86e9a6f066f100193a38a1ac9bda40125": "a78ac9781fc93632260cf4447dad2ebe",
".git/objects/05/86d8b6f6de6f88d0130d94a267e4d38e1700f8": "b207348764a592a252249b8be7f87692",
".git/objects/0a/cdca51513ef6a4fcda4c57d0cb5cc3d49a1619": "a39b5b4ad71f677d4dc37f620b141acc",
".git/objects/0b/7e827db98e95a392fcb055edeb1cd043da9ca7": "a45c87d8a9ba0b1ecc956dd1eadf210e",
".git/objects/0b/a82305f82b2242b40f3317e18e8a0165397ee8": "185084a57c8865390a9b22fa5bfbea5d",
".git/objects/10/38cd72e0e9d3631165c17238f4715966686a03": "28bbd3d20f32c42ab1fb6d19aae07150",
".git/objects/15/659ff7aec264a903009e13ffc18844ce8c51ab": "536feaaa54a117ceaf552b652b0ae51d",
".git/objects/15/eb206271624db71b45338621346bbd6baf61d3": "87a23cf260807045b5fb6472e0f360c2",
".git/objects/1a/d7683b343914430a62157ebf451b9b2aa95cac": "94fdc36a022769ae6a8c6c98e87b3452",
".git/objects/1d/9e8f79f50e29ff2e738de4fd4b374eeabb058e": "c12cac6b07606b83ce7878ffd52369be",
".git/objects/1e/60f4a284c682e3b7690935e69ac0ca87616970": "9517ca1e429a06f8be7f358db88076e6",
".git/objects/1e/83f5852d7766dd09d0cb0ed651e5fca2e011ef": "a750fe4eb2c04d7396e65e238bc95fda",
".git/objects/1f/70dc69d2b49dd96d80d413ee5b2289e5a203b0": "942f5a9ae345065df9663c38839dc1e6",
".git/objects/1f/78a4a898c03167e8f234163984ccfcce0b4887": "fed655fb7bd3b4f9d5089c9543aba183",
".git/objects/1f/901af4c13a7676ba40bf14040879f3f8248d0b": "f22d511ec5619bbed11ec76c676e7d99",
".git/objects/2a/dd9ce5daeaa8ceda5101a7873951579e4ead4e": "f7cc71082e71be1171e15249afe3af07",
".git/objects/31/80eff05fa9b644379080600a56f34e00ba47ad": "32aa6170e0c29a561be7dd7017ca986d",
".git/objects/31/de4775ee3f01fc632ae534b93214a5074eff3e": "3be623ab1743a6c3fcd7094729517857",
".git/objects/38/6967dc5eea453a2b40dda8fd821da235872848": "78d18138474c55d15b56b8ebccc9849f",
".git/objects/3a/1e1b78e9a6fbb7269a9e8db9809671eefbf8f1": "7e242d2566fbdba49fdcc27ecc8ba8df",
".git/objects/3f/9894c40d4a01686a0f6b50489713be9063207e": "400b30eb56a555c76646f7e0e539eded",
".git/objects/46/09a39230011559eb0dfd7747712bbd67b7f7c6": "7f98ab9d4dbfdb446ebb50a015d3c211",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4c/51fb2d35630595c50f37c2bf5e1ceaf14c1a1e": "a20985c22880b353a0e347c2c6382997",
".git/objects/4d/cc4c1a64a41be58df608605cf0834a53f5da48": "b14a2275449a77f95c7782e5195646c6",
".git/objects/4f/f2c215252962ce6475b84db3711f8479f77835": "113d1303e615f7e239ec6fa34a3f9f5a",
".git/objects/53/18a6956a86af56edbf5d2c8fdd654bcc943e88": "a686c83ba0910f09872b90fd86a98a8f",
".git/objects/53/3d2508cc1abb665366c7c8368963561d8c24e0": "4592c949830452e9c2bb87f305940304",
".git/objects/55/91e1f7f3ad29597860adcae4b3dc8273a2c777": "6498e4812c26e64267365d1e3d655059",
".git/objects/59/96b8e01626eed2250a1621164daf5e6c744dd4": "108b5f47bc7e21ef801ab633e8cccc3d",
".git/objects/5f/b09711d0889a93aab1d4fd3272de79caf2e4e3": "1fe48d0489f437d2fad27bb597d0205f",
".git/objects/5f/c2895b615590936f21352120639301e36835bb": "5d446c103168f8e3747ab483e5518589",
".git/objects/63/68231d65063489624115263c73e8c5f7c9f1dd": "0605bf24ef2aae5fcd927463756334af",
".git/objects/63/8d42ca52b6796c49d011a7ab24f2b219ac3493": "39064fa64504e651bc5f9f4f98ef8df9",
".git/objects/69/ecebeb1ae5c00c9591a0716a2a135d38b7437e": "cf65d95d60586cb1e7a6aa499714f367",
".git/objects/6a/a900ba3efaeb7b7bdb7db0d45f9dc6761de2c3": "e696f7b575aed5d17361417a701eeb35",
".git/objects/6b/628c9a0ac0bed8fdc6a0cf292d979047a338b0": "7ef6a4ccb898fd364415a5aa3a2e87d6",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6f/e17043d1cc81351d8953320a1bf4ef410c885d": "9cac6e03f2c681c1b1742a2d68dd0704",
".git/objects/70/a234a3df0f8c93b4c4742536b997bf04980585": "d95736cd43d2676a49e58b0ee61c1fb9",
".git/objects/71/d818a686ad8154e1173fa6ea7df48b3d3b4a56": "338fde8a903f8b79513e572bea243aa2",
".git/objects/73/c63bcf89a317ff882ba74ecb132b01c374a66f": "6ae390f0843274091d1e2838d9399c51",
".git/objects/78/c9b407e683c0f687bd37a56b480e5bc6824ff3": "95f18cd8e9ce4ce72f82aa8b51c51b3d",
".git/objects/79/c76aac0f9135bfdc1f2f6e9d9bcfdb57f79e13": "6fdd391ef1d1db5058f5bcc4af849a89",
".git/objects/7a/eaace63fe8aff8e0db0ae060eb8a3e297b631b": "aafcb3d19117b449d3444dde60c2b109",
".git/objects/7b/9e1fb32a48b279c9f0366f22e45af532c28d38": "4e991f181f74d58d55ad52872a6bfa6e",
".git/objects/7c/09b59e3bdd1d484ee9d2a86dafd4ee37ce6b98": "e92b36b60883f5be5660cf1782ba7bc0",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/b6f37173c3fcd603552fd8d84928897aacfd7e": "d16559b8cc19aca5d46f673edbe42d99",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8d/3c1069bc57b66b8af85864be2e0aa2df762db0": "b3f35e16d383a4cb09166831158e59a9",
".git/objects/8d/6cecf0764baa8cb04c4010e92c94ab63eb144f": "79632cdc590c78ef5012c66cc2b41d6b",
".git/objects/8e/3c7d6bbbef6e7cefcdd4df877e7ed0ee4af46e": "025a3d8b84f839de674cd3567fdb7b1b",
".git/objects/8f/81424338aba08f67eb2deae893e3972b5342ea": "7d9a025ae9752ac5afacc8321a8d9132",
".git/objects/8f/83c743919f18ac97a4be80b02b209d68a7a9c9": "2e4376028cccae6fadf4f80a53477090",
".git/objects/93/3f372e71472cd5edbe1de6f9850d3e1c83e057": "6c68cb2f85f2c6d5282e71bdd2a2284e",
".git/objects/95/9d6db5b16d5eb955093a0e750c80d6044249ab": "224a75cf05ebc73fe49405698b14f3eb",
".git/objects/96/16c77b7cbd53ae065159d6a91344ef03aa69ac": "1e632cbd98851ef99e0d785b4c1fffee",
".git/objects/96/859e9218afe8539cab1f19358b2a7ea07e82ca": "63f3d359a43bc21b6d05ebedae9c93e8",
".git/objects/9b/aa25156941065f1209781dac48be6751740151": "d6c592eeb26322bc9678ee425dcf865e",
".git/objects/9b/d3accc7e6a1485f4b1ddfbeeaae04e67e121d8": "784f8e1966649133f308f05f2d98214f",
".git/objects/a0/a80d256e6497d0293e90be3a2c96f8c7792b9c": "dd4e996b63e1dee65b764e4dd2948a05",
".git/objects/a0/d2594a7290413ae0831c2c112ae73a4781bca1": "9c3306d5b13fc2d1d35378e10781a0f3",
".git/objects/a2/1ae3cb9a81db849ff4e2e55b25af9b106c37ba": "6fccbbf3945881cd14995c4e8164e5e0",
".git/objects/a2/2c15fb3ce3a0190bcb2dfb450f42d01a39f00a": "7057cc0336976aa24b9b7d6c4271210a",
".git/objects/a5/7c2129fa68855c6bb2a381bea88a18d1cb8518": "094b55cb126b9fa96c2f329c5a2dbfd5",
".git/objects/a7/fa8e2fc35ec68b5a4ba84c9a7cc02bac93affd": "389b2de21651963f0e59827b0d57a560",
".git/objects/aa/9dab3e9ba3de9bfaac76d069d224d64c37ccb9": "66650178dbde49afa4cb657a9a05181c",
".git/objects/ae/3449dc9ddb47691aba6a41cb016fa68532b687": "6a7e68c943ae3155dbf73617e8d17674",
".git/objects/af/254cb4832813da9fb9f9434b7362eba8a92362": "390522e0a77aebd14e292ac200c43687",
".git/objects/af/6ed69092491c716460e1d10e03721867aa1739": "8d3722de555bb3944dad1bdcc1c47baa",
".git/objects/b4/4ed36d5d2dec106f3643bc6d44b90522d8d020": "aa60509ea53df44bb4890aeead0af768",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/387928a147a93427b36b4cc83f085555505db4": "b762ee139fb4a85b1f292cd14bec904d",
".git/objects/b9/6a5236065a6c0fb7193cb2bb2f538b2d7b4788": "4227e5e94459652d40710ef438055fe5",
".git/objects/bc/eecf013e5d25bc6f4de016c358b6e726e38990": "f4de2825390f4d1a809efa96014d4038",
".git/objects/bf/e90ed264e477e11fe317597a36d88fbb22801e": "945bcc81a2b9626c7d6b11c3a96b4492",
".git/objects/c6/9f08f264b661b1e5b0d3c71776ef0cbbae372e": "c379e217f6444ee6cee020b90e13734b",
".git/objects/c8/08fb85f7e1f0bf2055866aed144791a1409207": "92cdd8b3553e66b1f3185e40eb77684e",
".git/objects/cb/fb732c23bd41c4d2c71d6e373d7e0c16022de8": "facf92c627bf10b24ead95659305977b",
".git/objects/ce/13e5b7332095dd375680ffa2fdc005461f75db": "c4baeaf915cacf428052959a0297dbe7",
".git/objects/cf/2b48372e369cd6a60cc7a240534b02e959ff80": "a3b80534c24f59f3f0bb1c4f5ad70c9a",
".git/objects/d2/3fdcc7554f60b5c3630158b4f10e82b44a222d": "113f4c1595a388f00e85af04cd7fbd82",
".git/objects/d2/ad3ae1bde8dec262d91a6c43a2584c85762323": "ef510e9d27c445e47a71730da7c26e5e",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/da/510b91f3ad2c4e02767a91f9b498ae07da679d": "5d925aff9a4cb1a81b8509b6bce9e53d",
".git/objects/da/efd861d8c4c70cc51ace6b7452a4251251cdd5": "cc7922a18666f120ce881ca103b5d105",
".git/objects/dc/11fdb45a686de35a7f8c24f3ac5f134761b8a9": "761c08dfe3c67fe7f31a98f6e2be3c9c",
".git/objects/dd/fc3f3a9166153c4aec79bcb5c792d8a46595f5": "df5dd61f2851a6e43fd1f6a82b8db07f",
".git/objects/df/e3bed89c5bbbe404b954b2a08cc21098fdf701": "d3edaf4352a56012c75a1b085285d581",
".git/objects/e0/7ac7b837115a3d31ed52874a73bd277791e6bf": "74ebcb23eb10724ed101c9ff99cfa39f",
".git/objects/e2/2972fe663c7020fd20a27d1a7bdf79eff403a4": "9f9d1190ead23cd53ee084350de34494",
".git/objects/e6/980cacda80a95edab5a704027818f3ee1a8571": "efeeb6d047dface239811a51261f634b",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/eb/0f39e09709d04a7461d6ff74f73103be6783f1": "1f126f6e61d75b724d225bc0b034a398",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/3b368172a920bc5418e989731864cde62aa41d": "af9e492c30ed24acd0b65ed9a826cea0",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/15d40f8f99cc7a25403c7c01f5060ac6429159": "9605eeb0878ded10b3cabc81ef901e37",
".git/objects/f4/fdf40fbfd9a235dec7348cca3268db906046b9": "8b8418c512f741c95aca80e044c2a202",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f8/aa33b0d2883c6c932cdac67c46626e58f50500": "bcc5b77586e6cfa6f92bd4b75e94ac60",
".git/objects/fa/6a3c1116feb5a5651d1b45c36b9a106e01ced5": "50a811fc3b726225bf61b89b21927844",
".git/objects/fc/6a9caebeec9069a3a627e460533ef3174ebf74": "d68ebb1e42b246a59ed599f0ecbd79b9",
".git/objects/fe/e48db9b62bd4260eb9dc3c33c6586c468e0014": "e8126d037351d05f3d5f77968dc1badd",
".git/refs/heads/gh-pages": "d37b722518cb170fb9a0aeaffc0c9c17",
".git/refs/heads/master": "cb5843067078c11f36bb5ccb71044b3a",
".git/refs/remotes/origin/HEAD": "73a00957034783b7b5c8294c54cd3e12",
".git/refs/remotes/origin/master": "cb5843067078c11f36bb5ccb71044b3a",
".github/workflows/static.yml": "598decb53d7da062f35210cec35642bb",
"assets/AssetManifest.bin": "338e2dbe269f4d7ee212dfa6a2a5fb87",
"assets/AssetManifest.bin.json": "06ba252a6604fc54ebb30d6fab891e82",
"assets/AssetManifest.json": "0425bb7c38047aca04d7263fe2b1bee0",
"assets/assets/ali.jpg": "b47bdd9ba5a7cb9954c2c6b7688cd244",
"assets/assets/back.png": "319510be15b231ed9066ca1607c0301e",
"assets/assets/book.png": "d676b05c703b13a3013d51a69dd31efd",
"assets/assets/call.png": "5b922f0716488ed381520936cff29e70",
"assets/assets/chat1.png": "c1d8537d3d5a2bc768a718c38076df1d",
"assets/assets/faizan.png": "9858be0962b73db82829c6b22d4644af",
"assets/assets/flutter.png": "eb459ae5d2d5aecb4138fa99d720b4d1",
"assets/assets/flutter2.png": "c13d02fb9ff796f9bb3c8c2e4270531e",
"assets/assets/laiba.png": "458f2402fdaa17864c45caae88edb87f",
"assets/assets/lock-removebg.png": "8e75c813f03c5155e114a6b3e0606060",
"assets/assets/lock.jpg": "b47ef093b6de7a26ac24817161d3c56f",
"assets/assets/logo.png": "71ebe10f13935e03ba33c80cb0cfb568",
"assets/assets/me.png": "4fe24e9d8555be9f77f6b3bea25c48c9",
"assets/assets/meta.png": "fc3385a2fc4f7d854ae912405de24d8b",
"assets/assets/person.png": "acceac7e87c1a40672fc6eabac9bf4dd",
"assets/assets/person2.png": "73250aa8cb79746e1d0f046e713048ec",
"assets/assets/pic3.png": "2e457c4c8680fbd862334520c894cf75",
"assets/assets/pic4.png": "fcaf8343b3091005fee9b5caa82d6438",
"assets/assets/ss1.png": "c7c7a5ed95c9c09ce2cda51ae1ba026b",
"assets/assets/ss2.png": "e5a386f3f8e39e1306b7aadbfb44dcac",
"assets/assets/ss3.png": "0278716ae31a1c889bcbc8c396e59a1f",
"assets/assets/ss4.png": "af8c8b64055ca9a63bcdcdb2a7a936cc",
"assets/assets/ss5.png": "00f022db30552032a38c7fee71643131",
"assets/assets/ss6.png": "1d4d9c05ece231d6579646b4f801f32e",
"assets/assets/ssfaiz.png": "6bd5b57f5865bd84daa47d05e34abe7c",
"assets/assets/ssfalaq.png": "58a56ed50cfe2981a1eb914959105106",
"assets/assets/status.png": "82e542255f3877146e3a7e4f38bcc871",
"assets/assets/tab2.jpg": "254ef209ffb999be8aeddfde4afb8cc0",
"assets/assets/ubaid.png": "33e93d56fdc663ec918d19a95ddafd38",
"assets/assets/v1.png": "ff2cae8faac336a3153c40293608b17f",
"assets/assets/v2.png": "1ef51094bce96b7bafd0d5cc5ba29bb2",
"assets/assets/wicon.png": "77aa5da41fab32963647788b2bb0faa1",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "9cef800f17a680576a6b79267ee0c0da",
"assets/NOTICES": "7f673730900047942f728fe9f06d3f75",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "00f156f2b86c59dceb04a55f329ea1de",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "5bf22f1d4d146b778d585436ae43f843",
"/": "5bf22f1d4d146b778d585436ae43f843",
"main.dart.js": "418e7733df15d42fcb61900d50ad065b",
"manifest.json": "f8e82a0e601887dba71f3716282a51fa",
"version.json": "8865ebd275d1db484dbb92c082988661"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
