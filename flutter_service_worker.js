'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "d8823b8c9d0ac6836e200e36c243393b",
"index.html": "c61b28aa6cf8fd0f2ebdafba64910cf7",
"/": "c61b28aa6cf8fd0f2ebdafba64910cf7",
"loader.css": "5a44a4968d4b1ce8d863e621af99179a",
"main.dart.js": "c851e9e4849097ace34c3336ea7d1df1",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"favicon.png": "239df3cbbf58b3c7e0564ce2aee78302",
"icons/Icon-192.png": "d893ce81eeb26bff2f852421839fc927",
"icons/Icon-maskable-192.png": "d893ce81eeb26bff2f852421839fc927",
"icons/Icon-maskable-512.png": "2c0bc42f0183cf447e35d778dc6cfcd9",
"icons/Icon-512.png": "2c0bc42f0183cf447e35d778dc6cfcd9",
"manifest.json": "015975afbd945dea80a22c3f1a96d7cc",
".git/config": "7ad808ea5dabceb267805296421b276e",
".git/objects/59/adbe0164838deaf712279395551a2ff4834e51": "752220051cfdd202e76e5293873fa1a3",
".git/objects/92/3cab6c140883f23138185fe182854e671bef66": "89f2705cf40df223c976b65d86ff5e2e",
".git/objects/66/0e0d054dc373446c4762f68d8dd0fcc1b8470d": "dacdf9a125d90bca27f5b508d2917c78",
".git/objects/66/1663862a593372e39ea5f3ff7373a2aff4b2c8": "9de129f3c4769cba2b154a7b5c4c7bf6",
".git/objects/3e/d3dc1df31a26e966225fa4ebc94e2dac245c57": "44eaf393345adf8c96bb2513a70362ac",
".git/objects/50/b36acc4c595b8b035017bf717751b9da7977e4": "7abfee658ebe4b389b17374e62807226",
".git/objects/6f/4bd58663e223af200e6219a298e7f19f9f845a": "2afd8debf4b435ad4d71865e97731a12",
".git/objects/9b/a716ca6a72876e22febe99d3d949cf7db5f9c0": "16faf82768165981fdfb1574aee35e31",
".git/objects/3c/b3b53a24ee4712b8463133dca203ddd72fb43b": "c3066eae2c84f5465b93f0624f5ecfa6",
".git/objects/56/912c7e8c25ad29d12c6f41dbdfba920fabdd9f": "061ff5eda2b4e2c52a0292a2659d89d1",
".git/objects/3d/40215fd1aceb2aa2d8add4d65a294a8223ead8": "77c19b6174ffce2cf0bef8937f2484e3",
".git/objects/58/40c69005b9f02eeeb15f562ffcd75e0a3f325a": "90b9f6eb70ddb42cf13b5d1145ea6011",
".git/objects/58/9d791db5368086dc5700b76b8b1ce872a51f28": "0b5b5c1e633083390f97cc3e805a78bb",
".git/objects/0b/b3899e322e58c54bd79c60310e7830e7ef5125": "66ccaeb756314d1823cb027b146094ad",
".git/objects/0b/0135c6cc14a46f9257a5276c57f67626d971f4": "a16007d486c45986f7a3095410a5ca04",
".git/objects/0b/7d79fa80d8c19397eca2426873487dc918ac0e": "b510a9c2b5d05ef2265e0396a6af2cf9",
".git/objects/34/e29cf98b307285a36ef612612574b733535c4a": "6037fd94957bc2ca82f650c9f9c6b480",
".git/objects/34/2dfe400a9abf0f867eacb5510ac78db6e1b274": "3ef1c62728284b0946f1d29f52aad55c",
".git/objects/5a/985e36dec1ccffaff4d7472f2bb016a33365b7": "12f9802c35e25c771f8f948901045bdd",
".git/objects/33/12f10f420c2f8c410f57612467f897c1f0221f": "018653f4b07a5206a25d114cf07788a2",
".git/objects/33/7aac5c60c2e9714fa8eee34303011e4e8fed09": "dbb726fc3d0ed321322a1b08666889b5",
".git/objects/05/ef360ecc0d97e01b42158f5e9d8c76b74805d6": "61d23f4007d755edcc61e27042dc9cec",
".git/objects/d9/bfe65ba4203745b5902202a7c5acab6db6135f": "6276f9a7b07c8a62ccd4c4b1b57675aa",
".git/objects/ac/cfe73cd1452ef7099cb5ff8455129768b2f4cf": "832a9cf9f9c526f871ae16f12255edf4",
".git/objects/ac/dff003233d90b91aebe67dcd38d5049aacda7b": "6fea100e06e06948e49143e92be1a8dd",
".git/objects/ad/2f90b78480aeb6608226d9db4ecbd3ec06aaeb": "4add97a99941aa0e9eed0f2173416ade",
".git/objects/d7/c4ec6694540c2f4d0ffa02d1463b3d5029c082": "f0b76e96081e398b9ec8dcbdd08fb0f7",
".git/objects/be/529a6053fd15bd2a4d8cd13b921a25702f0a3d": "7ac5af25d73142d795653558fb5b4674",
".git/objects/df/58bb599ba55a3abf1343b38695c4be0d0b3e42": "7a8e61400e82030816019606eec54c47",
".git/objects/b4/83ccacd3b66c66ba7c1a4f3775b7022be3c8a8": "06b9aaaa6ba8924a770caf1cbebd06bf",
".git/objects/a2/12985f12111138db956e181104aee26ad7d50b": "8b9075b11cf2fa73526661a98d3dcca1",
".git/objects/a5/da7d1af722a879d9d02daf3852ca37ac802417": "f168f699ad9fc8337a63190bf6ee7450",
".git/objects/d1/90ad23717eebd2c0565016fb675b8edd02567c": "fd0cf0a3c04946e1652d2e9b9dcc6840",
".git/objects/ae/e12fc5dbda66cc18c12b52256da8e2a4049625": "8bac68c9063b15f3d4bfff6f7f2a22db",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e2/c53df14cbc4c2045ca6d9f21b3705d6f0c6c8a": "b0a12d6c8c45ba9d46eeb9fcb843aa7c",
".git/objects/f3/e934ea85bdb22a932e97ac11264c8441549a4d": "0529f589e56ca1e5d269df0214c8e177",
".git/objects/eb/d6487b812db0ac7e44c5d6cf3a55de1487eec0": "aa6165e4701baa6ad40db826b60d2473",
".git/objects/ee/d4e726885604eb32902a131ca5c6eed517f587": "d46dc0c9e858a3edcbd6ef359bf9865f",
".git/objects/fd/340b0ee44ff38aa1c1867a8fb62299069e0d87": "6f82b9901599ca90625e137156f026e2",
".git/objects/fd/aefb892d7c52351969f8518ba3da0922fcf034": "0fe323e98847df7a69db51a92da3b7b2",
".git/objects/fd/9aba5732700e618db1a93031c72914d830d29f": "ef7690edb57b185522fe4c98ce7a0af0",
".git/objects/f2/d4fc1e0e19eeb103c9a98cfda0c4b8e2570795": "748be10acdca6a60a0f86c3202c6c5a4",
".git/objects/cf/82beb8ea17ae88191c4e547f34b8526ff357d2": "b0f31546b9d1b01842687521ab41b5a6",
".git/objects/e4/57b710faeaac534aefc932aa5718851db4d3b0": "36b6195679fd566b5de4ad7ca2e5bf69",
".git/objects/4e/24610cf6a2176cbcb4aa04dd3ad6981a6ceb51": "967a15cf8f6eac602fcfbb9fb8d709ed",
".git/objects/20/491fa729ea5e724ec0e8707846f06f4c1921f8": "a262cb5198046d1bea8be19e1067abda",
".git/objects/27/cbdb4bdf1a5c18cda2722681acfb7a6f5c4a7f": "eea044adad9cd904f085e5cd104c0c6d",
".git/objects/11/ebe0abf0e894a859e0fb58e7eae195cda45183": "a448adc1da0456db701dc50d773d932a",
".git/objects/11/8462271b21f6dbff677ca4173d77e6eb49f60a": "6857eb4517391f8678af8d1efe063080",
".git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "20235224869b650fc9ceb371e56bb5c9",
".git/objects/42/7ac10bc5b660836d18b5715aaaf5450b671743": "ca504a1f8a258075f718c49332e637a3",
".git/objects/74/79c2bb48003602a414122e3979ce62486211e0": "e055a6fda1d7ef4cb2dd039e1f3b1267",
".git/objects/74/7233ee9b2f622c8dc814e2387f265f4a2856c0": "9d4792d3e5bb6fd9fbc5e24ff33663b9",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
".git/objects/1a/378213f245675ae2a95db02f8a67abb9bcc235": "ac932e153892e096c9042da9dd029d0c",
".git/objects/7b/16067757a0cf410019aa2b38c4b3fb43c455bd": "355c5f4fe806f862705d6b3b80f5e11b",
".git/objects/7b/37fc34b3b0930264b0e42d86582a1a8627c8e7": "713f701ed980142d27fd0d338611a600",
".git/objects/8f/c50bc5e62bc759e524885d2f0cfe81f9987005": "fadaff31bdff80173ce8a778323217c8",
".git/objects/7e/439dd0658212f96803c8d90caa4e5c2dd85bbe": "7d6691ae622515a7b082a7ccc20f5eef",
".git/objects/19/fbf05851ab00a9eb1d0b384f46c31a38f18e96": "eae2b31f0de34541b11339bf72fdcc62",
".git/objects/19/b80c933792e18cade8f86006e6d0e2b9bb6ea0": "9c799db4691e3873814d8acec4d4e1b8",
".git/objects/19/9913c092daccb717e51b9c63f6414e900e7487": "6c069e02d0db3a6ab49f24ef8ae8eacd",
".git/objects/26/998fa1f2ba861ad058979827d56c393adeeea8": "ae8e050308c54a04c522d42270f59e5d",
".git/objects/21/2daa13555277050b6a17235681389e01752704": "7fb53c1969fa7eac0b1e44e45f8f3e70",
".git/objects/4d/77afb6a71f66c7497110a919d17b167d2ed2a6": "5fc51091e4082d5e208946eedf695b54",
".git/objects/4d/27f163f48cb3e1ead5099fa3adcc8d792de06d": "85b002961765a5860b3d554ad9c539b3",
".git/objects/81/561e492cb569f8a2cac54bb0bb20a58b0bd6d0": "70fb1b8b31df8925bf3d44e0b4d4a9ad",
".git/objects/72/da677d66270212a5298d9bb6acbda20e4a1730": "8ae71f20faa8a1bf3fdfb60b38d69bdf",
".git/objects/43/22f4f4c89195807c549e5589980fd2f3fcfcc5": "088ce37dd779a491b44b7c8a1570ab1f",
".git/objects/9f/ef14682f8043902f07fbbe0a033e30a0ec3392": "127154a79f860268c05984a41d2bd605",
".git/objects/00/c75207b9fb1d269430d2dd5ef07b3f01f68310": "69eede4af6606f01dc70cda736b39b70",
".git/objects/6e/bd54651c773b25d38f87aa6321184e1d993a6a": "fc610f64554c4100c84b8ebfd40677db",
".git/objects/6e/26aab84236c2447fa9381dd6d97fc3797c4ea5": "51a6787275028abbbf39dd2c07d76cd7",
".git/objects/09/99a82d32bf4564f99df0102881b3962d5a01fc": "f85bfb26e5262f8b84c53f6b34fd2758",
".git/objects/5d/b940437c8b501100735b946b76451519fcf505": "a2fcf4577cc5a68b644d31ba94838f8b",
".git/objects/5d/f0f32d3bc170f546075a7a86e6f84978c545da": "805f74c7b11b685563799b5453c8f98a",
".git/objects/31/43ff0a182fda1a5eef9932c9b8957f45035d9b": "fccba85d780d2087b7dd088d117d48b6",
".git/objects/96/ab5ef097b4aac6575307ff19b216a11f192a28": "c30d74cd996c40f6f5f5e11cc7d6ccd1",
".git/objects/3a/950ccad32e3541d986cf4bae2a3f4cf36cdd66": "49ac06d13b4f04477b9c40076449467b",
".git/objects/3a/6491f33f639f7866fedb6a8ff7e93d301590d6": "610d94971021ce04d6a957bbb16cdfc1",
".git/objects/54/b4ebae6ad6526e9dd39996ba91ab6f6f8d9343": "277ac6ebd6295e29618963f5d01a5be3",
".git/objects/53/96f172ee970256f8dc8e826815033df7c7e004": "74803bd674ad5a955093ff2a6665d6de",
".git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
".git/objects/01/adb1591b0e5efcc8911e32d0739341d246912f": "0f9c7e5e0fa4abf0d3d03f849e275d29",
".git/objects/39/2557a356747df386ae1e085910f7b35d4026c5": "f52f687524c6f642096a7692ffa3ac70",
".git/objects/99/eaafabb26a6c6dd5e88b8da5c61d9526254e6a": "c176b4d20395e7d6d8330c406c3467c4",
".git/objects/55/c19dbaa58019af29be9df131c752574a0c0efa": "de5b205985f02b26885ab5a92ac518fe",
".git/objects/97/ebb3f6446fff917517f1faec3e13b0fa79e3c4": "ad184f582c7923de1ee0c91932d84a5f",
".git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
".git/objects/63/b59cb7e06ca2962732e1ba9d921fa29c0ec3c8": "36018c5ac4a67e9035c7afc09495f066",
".git/objects/0f/a2dea6cc467abf3a926bea01c63926564ed765": "7c9b9a6451fb731c1aa8f09a68bbb827",
".git/objects/64/7d444271cce853b4198962963a450231fcfaa1": "44153a2f9e16ecff521a63ff8a53e0ec",
".git/objects/d3/e8ece04c699387e171111ccf69a01aab7115d2": "6675c088ece83c93b8754ede99b24966",
".git/objects/a0/771419642a2e30ffca3767b34f0f21dfa02e49": "c8b2cc85c8574cf53b4bd03599d1ff89",
".git/objects/a7/b3e6a5dd9b017754fbaa0a711d8f6255278343": "b6a9edfb864d565dc467369d6e78edcc",
".git/objects/a7/c3999d03909acb8ca7157356fc1d5e2ebf10f3": "fb84c2a3029abaf23b8750cf840aba7b",
".git/objects/a9/e93a091e0376221b6c26d72e0a3f6f7131eb6f": "2c33b6c87e8435c70f77f565dd334368",
".git/objects/a9/91f51138ffe059d588003dc7936aff059a0428": "b73a35563fa129bd884d8b5c53ee9231",
".git/objects/d2/9a26c757b1cdad31f126bca1c3d60e2e086d56": "007a1c6a9c2847166dd1c1e8d2af4cab",
".git/objects/d2/447fe7cc94cb8fae2726e486cc712e87a476a3": "ab4d800a5efbddb6966fefe1c6b3da05",
".git/objects/b7/319bbcb612247ef5b087883931e68ed59998dc": "f5ed0efc9982f4f1b4eb88c32fdfcb2e",
".git/objects/b7/be04c90f0a850234d2351f2b6d472b23cc37cb": "dcec277346aeee8282373c88874bb4b1",
".git/objects/db/3f16cbd6c4ff10c166d1421796f34bb791b7b2": "c3e0383971353f73a01ecdde92716338",
".git/objects/a8/2bd4e86d428e6a07e833e526c6acb9ac6f0b05": "d3bcf7bb920317c37abfe431ec154968",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/a6/ef2e73c5c0f86a5e5397b6e3e459f6fe2b02e9": "d05415d6db5f468d36543bd2d7471d1b",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/ef/d20219448493ecb088de73d7597dea806bf1a4": "4599974156281774bdfac1294a06d4a8",
".git/objects/c3/f84072ec59b76a3a03efabbdc5c3429909dc0f": "0714f0ef3752b1466e26b0a7cc537d7d",
".git/objects/e1/0f1ce573a542d4140e060dc0de1ebccb109c41": "e3ced6de21e3aa9bbfd7a8e707188203",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/cc/fab74c1f56c330985060e2247607eaedb3c7d7": "ad5b6117df489509af208438785f208b",
".git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
".git/objects/f9/3c6c5449d01a3bf9eb046429feea0758575dd6": "cc28ad1eab2e96e1e5df95fc4b094f87",
".git/objects/e8/b573c943cd6082da34bd2c7cb3a2a3f28c59f4": "55de4cf0ace9f20797523bc5d353f936",
".git/objects/c5/fac1ccfe055f578b28cbcd12d9cb9d5df280b1": "538ea8eb786a3e859a9e5d364f5e65dc",
".git/objects/c2/62e31bfefe1093bc2597690f2b07021e6e04db": "a3de42b61bac3b73ce4d665b6b28ee0c",
".git/objects/f6/7b9c4f87e8b0a9bd5766307ec8d4ceffdd7864": "d2d01d5c9b3e6b60da1f691c02269525",
".git/objects/e9/f7dd8748631a29b538041235b7f79853ddb80e": "3f9b164033a122862fae1e19138678e1",
".git/objects/f1/98eb912b54a8e7270a5d6362691330a633483c": "b5ea0f094854981dc8d67bead9a18a8d",
".git/objects/ce/f8a03fa2bcbfb58e678d54f1c7875409976ab4": "a9e7306ca9775a05a7a0b526666cf5f3",
".git/objects/e0/d2c6e0499968b6bca2b58580ac4da12b176094": "913ca24c6014c0a0a48b17252902ce36",
".git/objects/e0/770bc0bc745f16c68bd737514f350b61f15a18": "a313fa3cce7d7f8cdd014eb10104cfa8",
".git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
".git/objects/2c/acfbf1ec0509e3ca957a65ea1435a742bb2570": "ff4876cff586f5c26feac68d7f9e542e",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/79/192c6c52c8f165c3a3c35c0aeee056f2f2c40f": "6ca5afec1543cd4198680c3ebb7e9d4b",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
".git/objects/83/10060d35161171b783f245bc5a0821452067b1": "45701ede689ace27f30c91b4ea16662a",
".git/objects/70/4689b066c1b85382a5991d6a7c090f733a9c61": "e99b13c50cae159e1b2cde8bb426ae09",
".git/objects/12/d6452617b657a7a07b311492dcc1720a0761ba": "5c79a52d97c989671603f89b904179cd",
".git/objects/8c/0f28f9fbf899bff9c6e0c940e92618c71e1b75": "4a1626588c748eef871dd10e69ba4ee9",
".git/objects/8c/2fc1efa48902ae53f29389a341434fe82713d3": "30f23763e6c79166295179284278e267",
".git/objects/85/764fc19c978baed747570e439408eb5ff6ac41": "2ac1aae87dc629954ec8a6838d7ac6a0",
".git/objects/85/507f847b19cf5c0883c6ff0e55b3f07487404d": "ba786caa81dfe43d773e39c7f22023a9",
".git/objects/85/b21db8f0424786006c997e75eeb64c2f03b716": "56634a4778a700f19371867fa03bc179",
".git/objects/85/a8dab516b0551117ba51925298e247259e5ded": "f5fd05942d1013881ef4fe31dd23dc2d",
".git/objects/1d/b5a3ba6f12b5550aee228e6e361159f4eef507": "e3c84247d5fd5b9e4cc43680cb28def2",
".git/objects/71/94b2c0fd195d3d014d555b3da86313a0e22802": "268463d7e47595327a4586dbdaae9785",
".git/objects/71/0f0e35a57c37a1ec9f7ab11c4a0083375e8757": "1e76fbcce1b903e1e3830a78d42270cd",
".git/objects/76/641ec682fa121edda6bc4510880e736de9a7c4": "03cf6b0e30348d80d58391a878f75d93",
".git/objects/1c/35c2a7dc9c91d381bc7132ba1ee19b238010ae": "751cbcc54d8c840f2c14c8388f5dc33b",
".git/objects/49/cffead965af153651b22a76a4e9bedb94054bd": "179e1dc995b246acdea93b26fa0f9a9f",
".git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
".git/objects/47/6320134f71f11eb05b4fdd06e0503e2e964822": "b6b3405392f1b0297582353525bc12a1",
".git/objects/8b/47a67b4b801462a9bf9b8e1e7ea14d11516b81": "aba2a84630822d3d922aaa34aaf62355",
".git/objects/8b/b4bbb33f40cc114c7ca2621873f5bc62308c3d": "4c171567a73832ad3979f792dcfebd90",
".git/objects/13/c612e569f876992c71d17fdabca550776d821e": "599c7fca5fbf982c150990c2ff99b63d",
".git/objects/13/892a9ec8fc1cfd997a5f11963b22c2069abda3": "f47a4f4e6f95f742f99d5c6b0226a116",
".git/objects/8e/a11d8e607b81527810a1150664731894b1f438": "69219afd7a355f74c0f4634a02b8b245",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "66123608e98b4589d742d8a68615214e",
".git/logs/refs/heads/main2": "d6df57e8f5fd6cb7461e33fb1d2489c2",
".git/logs/refs/heads/main": "6d5ac1254254429359b7b54b21866c7f",
".git/logs/refs/remotes/webdeploy/main2": "bd13c953a95e69dcd59f7ac3c01db389",
".git/logs/refs/remotes/webtest/main": "ee3dfc5919155817068ec8dc3701f5d3",
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
".git/refs/heads/main2": "6120b9850221cbf564b076b5bbe4dfc6",
".git/refs/heads/main": "6300ff91151041e16f2528d786a4397a",
".git/refs/remotes/webdeploy/main2": "47fdd0e058d2dcba3e6dba3fb79fe798",
".git/refs/remotes/webtest/main": "3c1539080d4669fbb301859040e3e277",
".git/index": "6508e5ec672e4a02cd57ef2194d5092e",
".git/COMMIT_EDITMSG": "f4d5d0c0671be202bc241807c243e80b",
"assets/AssetManifest.json": "008cbd7efba728c1b297a6d8313df0b4",
"assets/NOTICES": "134619e4befaecbf3f4747021bfa5324",
"assets/FontManifest.json": "f515622b0d1572dbcdfd44881cf54eac",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
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
"assets/assets/svg/hide1.svg": "01815f80df92448cf9ffe984370c4581",
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
