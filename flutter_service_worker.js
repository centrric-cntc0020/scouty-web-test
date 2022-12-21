'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "d8823b8c9d0ac6836e200e36c243393b",
"index.html": "3fc08cdc58817d3131a6bbec2c9f8c29",
"/": "3fc08cdc58817d3131a6bbec2c9f8c29",
"loader.css": "5a44a4968d4b1ce8d863e621af99179a",
"main.dart.js": "26e6ec28bd185a4deb5068a4183d07b6",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"favicon.png": "239df3cbbf58b3c7e0564ce2aee78302",
"icons/Icon-192.png": "d893ce81eeb26bff2f852421839fc927",
"icons/Icon-maskable-192.png": "d893ce81eeb26bff2f852421839fc927",
"icons/Icon-maskable-512.png": "2c0bc42f0183cf447e35d778dc6cfcd9",
"icons/Icon-512.png": "2c0bc42f0183cf447e35d778dc6cfcd9",
"manifest.json": "015975afbd945dea80a22c3f1a96d7cc",
".git/config": "2c60d268b49fbe38814f3eece70450bb",
".git/objects/92/ddaf19ad79cbdde7a8d75d9847df436846f12e": "f4c2afb8bb8f1be1ed52c5241d4d799c",
".git/objects/92/3cab6c140883f23138185fe182854e671bef66": "89f2705cf40df223c976b65d86ff5e2e",
".git/objects/3b/e29ed3edf7b38ebd647d40ee597d6f300b5ec7": "375e164ce6deb1e8f93e7ae5e3d2a95b",
".git/objects/6f/50bbfb80c44003e93df41bb8dfa35b4dabb0a4": "cada72f688608f09377eec122c959b88",
".git/objects/6f/4bd58663e223af200e6219a298e7f19f9f845a": "2afd8debf4b435ad4d71865e97731a12",
".git/objects/03/cbadff9509348d6cb44cef5066299e40d67ece": "a9270587730f2034347006ceb864c06a",
".git/objects/9b/a716ca6a72876e22febe99d3d949cf7db5f9c0": "16faf82768165981fdfb1574aee35e31",
".git/objects/9e/27334c87d623388b7a35b98875317de8c4b1cc": "e290f83191975ae16d8cc0418d8f5933",
".git/objects/35/0a396aa49659d8e3cdc7d6862bbe53e517d2f7": "2834ef5abcd6da6e680094619e3943eb",
".git/objects/69/ae9e2981c69c3475e7dc3534fbe3a3a925e33c": "873bfcfe3d85cc8c06e8def1ea6de028",
".git/objects/56/912c7e8c25ad29d12c6f41dbdfba920fabdd9f": "061ff5eda2b4e2c52a0292a2659d89d1",
".git/objects/3d/4d1e038f594871a4429a8123870c5b6ea625d2": "bb142426c5c44543e101e10807e56eaa",
".git/objects/67/04ec203a313e5a3f42d0bb9bdb000bf76778f1": "fbb24b3d15eba422e88dfe51b7811c38",
".git/objects/0b/e619738c7e0e4239236e5b11f0cb1f35b59302": "73c0055bddeadaddff5c13fdbf2cd762",
".git/objects/0b/b3899e322e58c54bd79c60310e7830e7ef5125": "66ccaeb756314d1823cb027b146094ad",
".git/objects/0b/7d79fa80d8c19397eca2426873487dc918ac0e": "b510a9c2b5d05ef2265e0396a6af2cf9",
".git/objects/93/a298cb0b25d35fdbcc73b03114e06aedb1398e": "bedbb6ec49cd78576a41ab1a9b2c218f",
".git/objects/34/2dfe400a9abf0f867eacb5510ac78db6e1b274": "3ef1c62728284b0946f1d29f52aad55c",
".git/objects/34/d3e8dfaec50a08c81b9e253f33108671129258": "ea062700ddc1a2470d3d0d469e7ab99b",
".git/objects/5a/985e36dec1ccffaff4d7472f2bb016a33365b7": "12f9802c35e25c771f8f948901045bdd",
".git/objects/33/12f10f420c2f8c410f57612467f897c1f0221f": "018653f4b07a5206a25d114cf07788a2",
".git/objects/02/f00474f4bc7644191d8cfc1ab5479ffff7fa1b": "42db25647784a75d808ff08c45f62caa",
".git/objects/a4/6b84968a5e31a4b10e7f1be7b9139ff1369dfc": "b52a2477a74c8543895bf0344d02f34e",
".git/objects/a4/1ead812decdad37f8c6edf08c93181ffe01ad3": "79bbb6642d8fc473ffcccde732981561",
".git/objects/a4/2c5ab94e3e5c3b7cdbdaf52abe027d3efff5d6": "5e7b9691f13bb1ebf4bef214419e2f95",
".git/objects/ac/cfe73cd1452ef7099cb5ff8455129768b2f4cf": "832a9cf9f9c526f871ae16f12255edf4",
".git/objects/ac/1218b6da4df479521a0e9373297a3c86bd483e": "b6df980d423b75b8c0183fc8792445df",
".git/objects/ac/00877b0563e4f4e8e086fe58c13f0cc7e2d1e2": "b25de1aaee4e411bf64a48b02da3bc56",
".git/objects/ad/2f90b78480aeb6608226d9db4ecbd3ec06aaeb": "4add97a99941aa0e9eed0f2173416ade",
".git/objects/ad/ff636666e2d3ad71855dbf3de3c9948340728b": "29f84954536e3c0a0b0cbb35fd15c31e",
".git/objects/d7/8f51822d9b218249d29aa4d9ea0f4d73f410a0": "0e198dae596db158657d20890f5580f9",
".git/objects/d7/c4ec6694540c2f4d0ffa02d1463b3d5029c082": "f0b76e96081e398b9ec8dcbdd08fb0f7",
".git/objects/d0/7e6cdfdfd4b39ad340767c0626aa55d93aac43": "97a9097d997ad5420dad191bdaf3edff",
".git/objects/b3/2acedfe6ce6dd728d6f7ae92b8dcdd81dc0d74": "60f882d79d21eb8b8811a40ae60aa996",
".git/objects/b3/2e0ac495c0af524c728806a033ea20ab023eaa": "5857a063ed9bff953a1d2d9959918dcc",
".git/objects/df/58bb599ba55a3abf1343b38695c4be0d0b3e42": "7a8e61400e82030816019606eec54c47",
".git/objects/b4/4132f80d084a2b27a088e2d4c5bda79076b9bd": "b8400571076c87e4ec54a0b5dc45baee",
".git/objects/b4/64441ea85ca00bd96e5043508a77f8a41e5ec8": "af2b6ea473a23ce75f172d68818d8657",
".git/objects/b4/83ccacd3b66c66ba7c1a4f3775b7022be3c8a8": "06b9aaaa6ba8924a770caf1cbebd06bf",
".git/objects/a5/da7d1af722a879d9d02daf3852ca37ac802417": "f168f699ad9fc8337a63190bf6ee7450",
".git/objects/bd/bf8441c3a99c240f5134b6a67e46a2b06279ac": "ae70539321d4cd08bc56df8ab0d102ac",
".git/objects/d1/90ad23717eebd2c0565016fb675b8edd02567c": "fd0cf0a3c04946e1652d2e9b9dcc6840",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/61728ba7e372e30014cac2165cc9c431550c95": "b3bf73bb33f62c4979edc1651733ca19",
".git/objects/ab/66d1012c34dc7245f40f9d6a85afead27077d1": "a1f894a5781f938b5d52a3c2ef6bae1d",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/f3/0280a3fab98a07873b0b709a726f2595bba656": "a51f39ba59b2c9d8008684c580c46792",
".git/objects/f3/1922c61ac6bb67adad1ebac6852d5c21cc6202": "c9c63add683e9fa079b1be9c813d82cc",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/d6487b812db0ac7e44c5d6cf3a55de1487eec0": "aa6165e4701baa6ad40db826b60d2473",
".git/objects/c9/1bc941654ce3b2df6c8d68ba80a61faca5d516": "3eed521b9a90a4d84674db239335daca",
".git/objects/fd/aefb892d7c52351969f8518ba3da0922fcf034": "0fe323e98847df7a69db51a92da3b7b2",
".git/objects/f2/d4fc1e0e19eeb103c9a98cfda0c4b8e2570795": "748be10acdca6a60a0f86c3202c6c5a4",
".git/objects/e4/57b710faeaac534aefc932aa5718851db4d3b0": "36b6195679fd566b5de4ad7ca2e5bf69",
".git/objects/20/491fa729ea5e724ec0e8707846f06f4c1921f8": "a262cb5198046d1bea8be19e1067abda",
".git/objects/20/0f7dae2c5831881bd8edf9894b21b35455b636": "4b643319ba9e96adb60bfe5143c37d11",
".git/objects/27/cbdb4bdf1a5c18cda2722681acfb7a6f5c4a7f": "eea044adad9cd904f085e5cd104c0c6d",
".git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "20235224869b650fc9ceb371e56bb5c9",
".git/objects/42/7ac10bc5b660836d18b5715aaaf5450b671743": "ca504a1f8a258075f718c49332e637a3",
".git/objects/1f/c71c2b52984dfc3a09850fa5df4334f1cc1399": "6014e724f09019ee2001e5407c2910f0",
".git/objects/74/7233ee9b2f622c8dc814e2387f265f4a2856c0": "9d4792d3e5bb6fd9fbc5e24ff33663b9",
".git/objects/1a/0392dfad4fa7ad51b4127727d6bd43f1ca7782": "792caea19219c0a094d772de6bd01030",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
".git/objects/1a/378213f245675ae2a95db02f8a67abb9bcc235": "ac932e153892e096c9042da9dd029d0c",
".git/objects/7b/16067757a0cf410019aa2b38c4b3fb43c455bd": "355c5f4fe806f862705d6b3b80f5e11b",
".git/objects/7b/37fc34b3b0930264b0e42d86582a1a8627c8e7": "713f701ed980142d27fd0d338611a600",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/7e/d1d89f6cb5d2f6b1adfec827c4e1561b1063b3": "a7e2e064e8d77db4b47a63b19ecfbece",
".git/objects/10/e54b83993ef11ca29e7568743d49f19bc4b6b5": "6025d1e92e553f07317f14671a8ba310",
".git/objects/19/fbf05851ab00a9eb1d0b384f46c31a38f18e96": "eae2b31f0de34541b11339bf72fdcc62",
".git/objects/19/b80c933792e18cade8f86006e6d0e2b9bb6ea0": "9c799db4691e3873814d8acec4d4e1b8",
".git/objects/19/9913c092daccb717e51b9c63f6414e900e7487": "6c069e02d0db3a6ab49f24ef8ae8eacd",
".git/objects/26/998fa1f2ba861ad058979827d56c393adeeea8": "ae8e050308c54a04c522d42270f59e5d",
".git/objects/21/2daa13555277050b6a17235681389e01752704": "7fb53c1969fa7eac0b1e44e45f8f3e70",
".git/objects/4d/77afb6a71f66c7497110a919d17b167d2ed2a6": "5fc51091e4082d5e208946eedf695b54",
".git/objects/81/cdc4dcb11726690fa06ee6131e4a52c05f7a43": "8c514230c7fd996d5f0c5f6c25e7d886",
".git/objects/86/dac783eeeac3dd514c4a5391fc06a0db8f77c8": "18d73950b2e84a579c500641ca47de66",
".git/objects/86/ad8f00dd4ee079bb8102c7306877d6d9510a00": "d37c68a908c6d3735dcb90730d2ea91f",
".git/objects/72/da677d66270212a5298d9bb6acbda20e4a1730": "8ae71f20faa8a1bf3fdfb60b38d69bdf",
".git/objects/44/06636e8e7d06cbca83b7b134d15849d629a4ae": "7dc3fd300cfc5a887778537a43b7c6f9",
".git/objects/43/22f4f4c89195807c549e5589980fd2f3fcfcc5": "088ce37dd779a491b44b7c8a1570ab1f",
".git/objects/43/affc18d14d33e2eda639bccff3d857026dce00": "2d44d25ac515fbe3067a5f1435bf0828",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/b1ac6337d97251983dfa76164e1e0ae8f09283": "e5df1188df6ddfeeabee683d1ebbfd56",
".git/objects/9f/20df3bdc2eeff3274c1065afb4fa35536c5971": "9582b2f29a60a8c591347272627f7166",
".git/objects/9f/ef14682f8043902f07fbbe0a033e30a0ec3392": "127154a79f860268c05984a41d2bd605",
".git/objects/07/150fd1775963c15e2f85480dfadd7b59162cc2": "daa4a6092be132060ed2d25ac9acc278",
".git/objects/07/82499e29cd22bfe0bb8a049b8ed641a1c09048": "5503674d693f6310b51423b1b9e7460e",
".git/objects/6e/26aab84236c2447fa9381dd6d97fc3797c4ea5": "51a6787275028abbbf39dd2c07d76cd7",
".git/objects/36/f5c27046e5c7f635eb4f4a73ac7fe2311d68b0": "52dfdcd6855530123b8164fa8cb6aa86",
".git/objects/09/99a82d32bf4564f99df0102881b3962d5a01fc": "f85bfb26e5262f8b84c53f6b34fd2758",
".git/objects/5d/b940437c8b501100735b946b76451519fcf505": "a2fcf4577cc5a68b644d31ba94838f8b",
".git/objects/5d/f0f32d3bc170f546075a7a86e6f84978c545da": "805f74c7b11b685563799b5453c8f98a",
".git/objects/31/43ff0a182fda1a5eef9932c9b8957f45035d9b": "fccba85d780d2087b7dd088d117d48b6",
".git/objects/91/16f104a705e4ffd03d09ec0518d404ae668105": "a60929d0d1d7def0a4af254f051cd6bc",
".git/objects/3a/950ccad32e3541d986cf4bae2a3f4cf36cdd66": "49ac06d13b4f04477b9c40076449467b",
".git/objects/53/7f5c1e975597b5fed65167c87eda02e84257e1": "ca93bd3f240b468a2dd8fe0fefe9c06e",
".git/objects/3f/a14c831d6f4d60416385e201053a10be75d64f": "9b7c6bad9f99bc2d42f59cabb937720e",
".git/objects/3f/19b24dc2678bcdb1aa239cac69865361cb5b99": "86b5e23c58fca3ec4ab0732089e94a67",
".git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
".git/objects/3f/3c8937eb71ef0fadc7e9170859021f9d1c4e81": "db782683669831eef3fc6da8eafd9c2a",
".git/objects/01/f05e7144b408381886b1386f0a3ae25b63ef8a": "8790f6b749d727e4fab9a1f73679b2ae",
".git/objects/6c/7e1cbbdc1de7f3ec87a0a73e81bc2004e446b7": "cc05ce1f39afbdc79da1d2f1684f0f98",
".git/objects/55/c19dbaa58019af29be9df131c752574a0c0efa": "de5b205985f02b26885ab5a92ac518fe",
".git/objects/97/ebb3f6446fff917517f1faec3e13b0fa79e3c4": "ad184f582c7923de1ee0c91932d84a5f",
".git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
".git/objects/63/b59cb7e06ca2962732e1ba9d921fa29c0ec3c8": "36018c5ac4a67e9035c7afc09495f066",
".git/objects/bf/63b2d05972f35f47ff074ec231f7450b331f94": "bf697174cd9fb6d1a5ada9704c794b69",
".git/objects/d3/e8ece04c699387e171111ccf69a01aab7115d2": "6675c088ece83c93b8754ede99b24966",
".git/objects/a0/19b1354fd6699ddd8c2bf418dd60e3f10a19dd": "bb461d3faf373736d2900da5155afc70",
".git/objects/a7/b3e6a5dd9b017754fbaa0a711d8f6255278343": "b6a9edfb864d565dc467369d6e78edcc",
".git/objects/b8/edb8bdbe8e8ac29c91ed1f07f775f30d4aa176": "d319a48587ca23d0f7036194d8c14fed",
".git/objects/dc/5b37bdc1b76f1469e16c6fdf70848c3a85323e": "2ac37b101a8d26c7fee93a88395e90c6",
".git/objects/a9/e93a091e0376221b6c26d72e0a3f6f7131eb6f": "2c33b6c87e8435c70f77f565dd334368",
".git/objects/a9/91f51138ffe059d588003dc7936aff059a0428": "b73a35563fa129bd884d8b5c53ee9231",
".git/objects/d2/447fe7cc94cb8fae2726e486cc712e87a476a3": "ab4d800a5efbddb6966fefe1c6b3da05",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/766abf38ca2d1502401c760862900d72405410": "bf19be05861bea21f9d61428da3ca996",
".git/objects/b7/be04c90f0a850234d2351f2b6d472b23cc37cb": "dcec277346aeee8282373c88874bb4b1",
".git/objects/a8/2bd4e86d428e6a07e833e526c6acb9ac6f0b05": "d3bcf7bb920317c37abfe431ec154968",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/b0/3760041413da95dcf54ec8e715e385980f7ffd": "e27f4fd2f1d6927960081b16ec8b76cf",
".git/objects/b0/7e69d8034edb7ee206e2af79021ea3e17025ff": "7044a50010ff8654b6bc5095d86703a6",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a1/4ef11ec2cc2f057062ce83f9bdfa9600d31f53": "60b0e05947d2e666a4da4495e1414a59",
".git/objects/a1/f58d836f9062ff46a6ea3235faf237f34687a1": "0b46ca1e0c5465f6e00ab51ce2045fd2",
".git/objects/ef/5818ce4d8591c2ec353b1c246b0405cdab0478": "685c04be0884912c2f1409bf1da8d17c",
".git/objects/ef/d20219448493ecb088de73d7597dea806bf1a4": "4599974156281774bdfac1294a06d4a8",
".git/objects/c3/f84072ec59b76a3a03efabbdc5c3429909dc0f": "0714f0ef3752b1466e26b0a7cc537d7d",
".git/objects/c4/ff1750c7431980a9ac10eac056dde3bfaffd11": "8528551f404724ac6547119e87b8fea9",
".git/objects/e1/0f1ce573a542d4140e060dc0de1ebccb109c41": "e3ced6de21e3aa9bbfd7a8e707188203",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/cc/fab74c1f56c330985060e2247607eaedb3c7d7": "ad5b6117df489509af208438785f208b",
".git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
".git/objects/cc/ed64df4c5c622d340b92f921d0e3d848017976": "1fa4ab853eb457b736076d41c8024239",
".git/objects/e6/1e60e54d40323f213394aa7ccfbbfd31de6e1b": "3d7d60a7b70678200372944dd1f14a0a",
".git/objects/f9/3c6c5449d01a3bf9eb046429feea0758575dd6": "cc28ad1eab2e96e1e5df95fc4b094f87",
".git/objects/e8/b573c943cd6082da34bd2c7cb3a2a3f28c59f4": "55de4cf0ace9f20797523bc5d353f936",
".git/objects/c2/62e31bfefe1093bc2597690f2b07021e6e04db": "a3de42b61bac3b73ce4d665b6b28ee0c",
".git/objects/f6/7b9c4f87e8b0a9bd5766307ec8d4ceffdd7864": "d2d01d5c9b3e6b60da1f691c02269525",
".git/objects/e9/f7dd8748631a29b538041235b7f79853ddb80e": "3f9b164033a122862fae1e19138678e1",
".git/objects/f1/98eb912b54a8e7270a5d6362691330a633483c": "b5ea0f094854981dc8d67bead9a18a8d",
".git/objects/cb/5cd966b48422100dc523d62647d259018a5715": "4305f5a84ca3cad5f71bcda8b8ff03ef",
".git/objects/ce/7bd8bec3ce79756fe183e16dd086c796d63155": "d37f64ce3c712c9e2c21a7fccf7d468b",
".git/objects/ce/f8a03fa2bcbfb58e678d54f1c7875409976ab4": "a9e7306ca9775a05a7a0b526666cf5f3",
".git/objects/e0/d2c6e0499968b6bca2b58580ac4da12b176094": "913ca24c6014c0a0a48b17252902ce36",
".git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
".git/objects/46/03f3cd9c030e2e41b7cd0175219f0a37e29e30": "57e36db729b13058dd28f1e1b20079bc",
".git/objects/2c/acfbf1ec0509e3ca957a65ea1435a742bb2570": "ff4876cff586f5c26feac68d7f9e542e",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/79/59d6d91f2266a47674fd834c288af71ba9a2a6": "7feebda2b6e071a32258d12a48c34764",
".git/objects/70/3520838e2342d71970fd870ddbe2a831c7c8ea": "b47a6168637f78de4203a82d92cee858",
".git/objects/70/4689b066c1b85382a5991d6a7c090f733a9c61": "e99b13c50cae159e1b2cde8bb426ae09",
".git/objects/84/0dd512fe9520696d995aeddfe5e92a37a75945": "a3e1a06c270ee1c730d06928a3a39fa0",
".git/objects/23/2f1d4308f137c21ae8264c071ef1982b0b9f0b": "1a04e309168e7faba7f9e4b4ed023b7b",
".git/objects/12/396d0b072783314d7283b414a90f7bf8138efb": "a70407984e51a705177f2cb57abb76d0",
".git/objects/8c/01659bb114b952e3f92da835f9b9f5822594f3": "e31a8c6124e59b133f4751df57e49808",
".git/objects/8c/0f28f9fbf899bff9c6e0c940e92618c71e1b75": "4a1626588c748eef871dd10e69ba4ee9",
".git/objects/8c/2fc1efa48902ae53f29389a341434fe82713d3": "30f23763e6c79166295179284278e267",
".git/objects/8c/8e0c69a02bb275058e743206153e8213360dfa": "baabe24de899580b221db2cabae845b0",
".git/objects/85/764fc19c978baed747570e439408eb5ff6ac41": "2ac1aae87dc629954ec8a6838d7ac6a0",
".git/objects/85/507f847b19cf5c0883c6ff0e55b3f07487404d": "ba786caa81dfe43d773e39c7f22023a9",
".git/objects/85/b21db8f0424786006c997e75eeb64c2f03b716": "56634a4778a700f19371867fa03bc179",
".git/objects/1d/3f78c1da7f679351c0030eac6b90de28a18342": "594cf853b8e9fefa0659df3a47aab0ae",
".git/objects/1d/02d14b909a692fd84b2920b843729bba35b125": "a8297fd3478b1d0e3add9dc628c8785f",
".git/objects/71/94b2c0fd195d3d014d555b3da86313a0e22802": "268463d7e47595327a4586dbdaae9785",
".git/objects/71/72620b46d7e7fd4afea4d2e108badb9b68331a": "03120c453befd02507fa0ca159a738b9",
".git/objects/49/cffead965af153651b22a76a4e9bedb94054bd": "179e1dc995b246acdea93b26fa0f9a9f",
".git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
".git/objects/47/6320134f71f11eb05b4fdd06e0503e2e964822": "b6b3405392f1b0297582353525bc12a1",
".git/objects/78/cf99056f06a9b9aeac3fd3f5b6f2e0c1d225e5": "e60c261482d4194c323b056991811202",
".git/objects/8b/d2d28165bd34a70c1d7703ff8cc6853f9dc5ae": "a672834fc85a43aab196dd069565b69a",
".git/objects/13/892a9ec8fc1cfd997a5f11963b22c2069abda3": "f47a4f4e6f95f742f99d5c6b0226a116",
".git/objects/14/d1a380bf5283998d7ff741e89e9c934a44a65c": "902610a9cd5f30b598970387b22d88f6",
".git/objects/8e/a11d8e607b81527810a1150664731894b1f438": "69219afd7a355f74c0f4634a02b8b245",
".git/objects/8e/0ce0e5c9cc378229784e5605af877a1629df3c": "0b5a1d8fce2c2395649a20259dfe8f58",
".git/HEAD": "361ccd0a2d5c154df54ccc7ff4e08974",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "f4eb17c2604125b4eb2b62164ccf7500",
".git/logs/refs/heads/main2": "cefbc69c460fa5449ae6f2ec577a111d",
".git/logs/refs/heads/main": "811ccea465d1e719914b411a0d33a38e",
".git/logs/refs/remotes/webdeploy/main2": "17fe39a21c0c0520795c232de3963bfc",
".git/logs/refs/remotes/webtest/main2": "2c5eacabddcdd01b5772ad0e747ffbc7",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main2": "9f2bf25410f9a522817406568d3dd8ff",
".git/refs/heads/main": "6c1da9d2a2f8f3584b212a2e03632b9d",
".git/refs/remotes/webdeploy/main2": "c2e8493be4e5eca89356d0f6241aefa9",
".git/refs/remotes/webtest/main2": "9f2bf25410f9a522817406568d3dd8ff",
".git/index": "dce226b823e9686d047c675ee8dc9971",
".git/packed-refs": "a891e6bb26eb0d480aef486a7e8ea166",
".git/COMMIT_EDITMSG": "29fd68112cb5892221105d776a44e758",
"assets/AssetManifest.json": "0607e958717837b706ac42fe95d8c3d6",
"assets/NOTICES": "a81391ea8ed2e7d9ea86913a5b1d1a00",
"assets/FontManifest.json": "f515622b0d1572dbcdfd44881cf54eac",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "9317b7de046f228474e7892feed79e49",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/svg/image-rectangle.svg": "39119cedba3de7f2e74bbe786b223989",
"assets/assets/svg/search.svg": "e02d86b4136f506739e7cb538872be8e",
"assets/assets/svg/direction-left.svg": "4903661c1f4ed9b3452fd220381b46c7",
"assets/assets/svg/users1.svg": "253be19a129d6f2df7570bca285fbe8b",
"assets/assets/svg/user.svg": "806e22cbc23568f52f16f08bf397ae8a",
"assets/assets/svg/file-minus.svg": "25fb137201c357c1cd20b41756d504d6",
"assets/assets/svg/gmail.svg": "75083595e7fe8591e95489c6921916aa",
"assets/assets/svg/home.svg": "6b053b5dd386d8717557ce59efa8e26c",
"assets/assets/svg/more-horizontal.svg": "1682197368eb221f6479e00a7e1be78c",
"assets/assets/svg/chart-histogram.svg": "04fcd79a7d57c43d18c28239d51517f4",
"assets/assets/svg/star-s-fill.svg": "8c5707ba9851d432a34a9826bbda32fe",
"assets/assets/svg/lock.svg": "9f2091fdc1741d82d98cf91d7fd9ecdc",
"assets/assets/svg/app_icon.svg": "923e6819df698880fe26434a99dcf9e1",
"assets/assets/svg/instagram.svg": "f313bea6e5417079a5c327a00c545251",
"assets/assets/svg/apple_logo.svg": "023c04f1fabcd8051159f626cd03218d",
"assets/assets/svg/users02.svg": "9464aa34cca9d4c79db4f999717ecc2c",
"assets/assets/svg/login_bg.svg": "58124a61806e48cc86737160656d240b",
"assets/assets/svg/tick.svg": "4ee13f6b369ab28558d0d2b8e5be5467",
"assets/assets/svg/flag.svg": "078214e9e793b544de248c2a3efb58df",
"assets/assets/svg/arrow_sort.svg": "cc4f01cb038a98970fd03a63da8f4d4e",
"assets/assets/svg/wifi.svg": "710f8790a737e001b2634e87ae3393e8",
"assets/assets/svg/Add.svg": "52da33fbaa031dab068672b7ca3eacab",
"assets/assets/svg/logo_with_text.svg": "fd1e4a05b97b454af0e62acc1216b19f",
"assets/assets/svg/navigation.svg": "201c072dc0b416e1f0f30a647c184771",
"assets/assets/svg/setting.svg": "c0c0cc8bd5c4feefb23f659c00c26e79",
"assets/assets/svg/chat.svg": "6b6f0eb89a3850673b267f18fc448799",
"assets/assets/svg/notification.svg": "82b887f3382ec6311934192cc763f539",
"assets/assets/svg/paypal.svg": "0fecb6f960d8beb890700ab084265acc",
"assets/assets/svg/speaker.svg": "cef51f4cefe872af678d853411c8c2dd",
"assets/assets/svg/facebook.svg": "2f4e4e13a85f1cfd7d2c9832e0d621b3",
"assets/assets/svg/security.svg": "6fc08f5268f31ef87a15dd1283e8d6d4",
"assets/assets/svg/google.svg": "7286ff769c375662c0fbad804ed7c3dd",
"assets/assets/svg/attachment.svg": "cd5d1234c8e48665b73a3d8f7d738259",
"assets/assets/svg/trash.svg": "13794130585d3f054598266211f9a6df",
"assets/assets/svg/edit.svg": "8cb6a8be95dd3bf3d73ce199833811d1",
"assets/assets/svg/user-circle.svg": "eb603da50634754855bb0f5d548f5316",
"assets/assets/svg/facebook_icon.svg": "59b9572202cb539280492af7e53e8a17",
"assets/assets/svg/Call.svg": "b5743c3329921b2eb31a6f197633417a",
"assets/assets/svg/location.svg": "678362111081e435e222d43d1d5ff441",
"assets/assets/svg/more-vertical.svg": "8335432cee3ec41893400e5a604a7982",
"assets/assets/svg/direction-down.svg": "9e4344344be702de9e5f91e54aa6e5b3",
"assets/assets/svg/view.svg": "0a3a2e0363e1b00f0688239145f35dbe",
"assets/assets/svg/filter.svg": "50dda601ccb5c87640cc992a2849953f",
"assets/assets/svg/wave.svg": "1852857996840e3e792561f65350fc31",
"assets/assets/svg/invisible.svg": "4e79a70ef141a1fc70f230b2810b00e9",
"assets/assets/svg/upload.svg": "1ad1f5e15d2c897ddd134ba377d270fe",
"assets/assets/svg/zoomout.svg": "73745507176f14aa277689599f57e0a1",
"assets/assets/svg/call-hospital.svg": "62364da28fa6a1af86cd2b43d4e74ece",
"assets/assets/svg/menu.svg": "2ad534e03c9e9dccb15c41959eaba246",
"assets/assets/svg/doublebed.svg": "e5d15283d28a7da0c364e1d6ee211427",
"assets/assets/icons/ScoutyHyde.ttf": "9d70feb6f92f36f230a0cc306de42689",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
