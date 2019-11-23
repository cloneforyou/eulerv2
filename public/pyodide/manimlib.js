var Module=typeof pyodide._module!=="undefined"?pyodide._module:{};Module.checkABI(1);if(!Module.expectedDataFileDownloads){Module.expectedDataFileDownloads=0;Module.finishedDataFileDownloads=0}Module.expectedDataFileDownloads++;(function(){var loadPackage=function(metadata){var PACKAGE_PATH;if(typeof window==="object"){PACKAGE_PATH=window["encodeURIComponent"](window.location.pathname.toString().substring(0,window.location.pathname.toString().lastIndexOf("/"))+"/")}else if(typeof location!=="undefined"){PACKAGE_PATH=encodeURIComponent(location.pathname.toString().substring(0,location.pathname.toString().lastIndexOf("/"))+"/")}else{throw"using preloaded data can only be done on a web page or in a web worker"}var PACKAGE_NAME="manimlib.data";var REMOTE_PACKAGE_BASE="manimlib.data";if(typeof Module["locateFilePackage"]==="function"&&!Module["locateFile"]){Module["locateFile"]=Module["locateFilePackage"];err("warning: you defined Module.locateFilePackage, that has been renamed to Module.locateFile (using your locateFilePackage for now)")}var REMOTE_PACKAGE_NAME=Module["locateFile"]?Module["locateFile"](REMOTE_PACKAGE_BASE,""):REMOTE_PACKAGE_BASE;var REMOTE_PACKAGE_SIZE=metadata.remote_package_size;var PACKAGE_UUID=metadata.package_uuid;function fetchRemotePackage(packageName,packageSize,callback,errback){var xhr=new XMLHttpRequest;xhr.open("GET",packageName,true);xhr.responseType="arraybuffer";xhr.onprogress=function(event){var url=packageName;var size=packageSize;if(event.total)size=event.total;if(event.loaded){if(!xhr.addedTotal){xhr.addedTotal=true;if(!Module.dataFileDownloads)Module.dataFileDownloads={};Module.dataFileDownloads[url]={loaded:event.loaded,total:size}}else{Module.dataFileDownloads[url].loaded=event.loaded}var total=0;var loaded=0;var num=0;for(var download in Module.dataFileDownloads){var data=Module.dataFileDownloads[download];total+=data.total;loaded+=data.loaded;num++}total=Math.ceil(total*Module.expectedDataFileDownloads/num);if(Module["setStatus"])Module["setStatus"]("Downloading data... ("+loaded+"/"+total+")")}else if(!Module.dataFileDownloads){if(Module["setStatus"])Module["setStatus"]("Downloading data...")}};xhr.onerror=function(event){throw new Error("NetworkError for: "+packageName)};xhr.onload=function(event){if(xhr.status==200||xhr.status==304||xhr.status==206||xhr.status==0&&xhr.response){var packageData=xhr.response;callback(packageData)}else{throw new Error(xhr.statusText+" : "+xhr.responseURL)}};xhr.send(null)}function handleError(error){console.error("package error:",error)}var fetchedCallback=null;var fetched=Module["getPreloadedPackage"]?Module["getPreloadedPackage"](REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE):null;if(!fetched)fetchRemotePackage(REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE,function(data){if(fetchedCallback){fetchedCallback(data);fetchedCallback=null}else{fetched=data}},handleError);function runWithFS(){function assert(check,msg){if(!check)throw msg+(new Error).stack}Module["FS_createPath"]("/","lib",true,true);Module["FS_createPath"]("/lib","python3.7",true,true);Module["FS_createPath"]("/lib/python3.7","site-packages",true,true);Module["FS_createPath"]("/lib/python3.7/site-packages","manimlib-0.1.11.dev91-py3.7.egg-info",true,true);Module["FS_createPath"]("/lib/python3.7/site-packages","manimlib",true,true);Module["FS_createPath"]("/lib/python3.7/site-packages/manimlib","utils",true,true);Module["FS_createPath"]("/lib/python3.7/site-packages/manimlib","mobject",true,true);Module["FS_createPath"]("/lib/python3.7/site-packages/manimlib/mobject","types",true,true);Module["FS_createPath"]("/lib/python3.7/site-packages/manimlib/mobject","svg",true,true);Module["FS_createPath"]("/lib/python3.7/site-packages/manimlib","animation",true,true);Module["FS_createPath"]("/lib/python3.7/site-packages/manimlib","camera",true,true);Module["FS_createPath"]("/lib/python3.7/site-packages/manimlib","scene",true,true);Module["FS_createPath"]("/lib/python3.7/site-packages/manimlib","web",true,true);Module["FS_createPath"]("/lib/python3.7/site-packages/manimlib","container",true,true);Module["FS_createPath"]("/lib/python3.7/site-packages/manimlib","files",true,true);Module["FS_createPath"]("/","bin",true,true);function DataRequest(start,end,audio){this.start=start;this.end=end;this.audio=audio}DataRequest.prototype={requests:{},open:function(mode,name){this.name=name;this.requests[name]=this;Module["addRunDependency"]("fp "+this.name)},send:function(){},onload:function(){var byteArray=this.byteArray.subarray(this.start,this.end);this.finish(byteArray)},finish:function(byteArray){var that=this;Module["FS_createPreloadedFile"](this.name,null,byteArray,true,true,function(){Module["removeRunDependency"]("fp "+that.name)},function(){if(that.audio){Module["removeRunDependency"]("fp "+that.name)}else{err("Preloading file "+that.name+" failed")}},false,true);this.requests[this.name]=null}};function processPackageData(arrayBuffer){Module.finishedDataFileDownloads++;assert(arrayBuffer,"Loading data file failed.");assert(arrayBuffer instanceof ArrayBuffer,"bad input to processPackageData");var byteArray=new Uint8Array(arrayBuffer);var curr;var compressedData={data:null,cachedOffset:252235,cachedIndexes:[-1,-1],cachedChunks:[null,null],offsets:[0,960,2115,3367,4640,6118,7543,8633,9312,10192,11348,12380,13377,14376,15554,16571,17440,18792,20082,21211,22644,24030,25373,26541,27731,29102,30265,31496,32589,33818,34894,36093,37396,38623,40039,41374,42602,43622,44464,45533,46752,47888,48950,50162,51203,52268,53465,54600,55587,56690,57662,58696,59724,60908,61987,63204,64206,65237,66264,67283,68457,69630,70728,71598,72658,73613,74622,75506,76397,77384,78503,79398,80451,81350,82340,83318,84334,85377,86464,87625,88720,89866,91017,92166,93288,94450,95362,96476,97654,98603,99630,100711,101844,102819,103860,105022,106111,106964,108181,109191,110287,111495,112618,113835,115017,115927,116600,117502,118335,119313,120356,121434,122531,123577,124647,125666,126881,127844,128944,130126,131106,132165,133227,134404,135522,136412,137369,138489,139637,140679,141655,142750,143816,144886,145996,146858,147705,148697,149760,150758,151910,153003,154143,155153,156158,156857,157609,158713,159783,160947,162143,163325,164423,165511,166621,167603,168720,169797,170903,171808,172963,173988,175053,176139,177174,178240,179304,180526,181680,182796,183903,185069,186060,187118,188250,189218,190023,190994,192122,193200,194243,195163,196220,197077,198380,199316,200290,201368,202427,203545,204607,205899,206851,208088,208836,209770,210863,211912,212843,213851,214766,215731,216807,217767,218879,219816,220878,221784,222933,224013,224914,226011,227026,228240,229386,230453,231548,232604,233671,234683,235699,236646,237614,238847,239827,240981,241937,243093,244056,245064,246051,247229,248318,249466,250714,252183],sizes:[960,1155,1252,1273,1478,1425,1090,679,880,1156,1032,997,999,1178,1017,869,1352,1290,1129,1433,1386,1343,1168,1190,1371,1163,1231,1093,1229,1076,1199,1303,1227,1416,1335,1228,1020,842,1069,1219,1136,1062,1212,1041,1065,1197,1135,987,1103,972,1034,1028,1184,1079,1217,1002,1031,1027,1019,1174,1173,1098,870,1060,955,1009,884,891,987,1119,895,1053,899,990,978,1016,1043,1087,1161,1095,1146,1151,1149,1122,1162,912,1114,1178,949,1027,1081,1133,975,1041,1162,1089,853,1217,1010,1096,1208,1123,1217,1182,910,673,902,833,978,1043,1078,1097,1046,1070,1019,1215,963,1100,1182,980,1059,1062,1177,1118,890,957,1120,1148,1042,976,1095,1066,1070,1110,862,847,992,1063,998,1152,1093,1140,1010,1005,699,752,1104,1070,1164,1196,1182,1098,1088,1110,982,1117,1077,1106,905,1155,1025,1065,1086,1035,1066,1064,1222,1154,1116,1107,1166,991,1058,1132,968,805,971,1128,1078,1043,920,1057,857,1303,936,974,1078,1059,1118,1062,1292,952,1237,748,934,1093,1049,931,1008,915,965,1076,960,1112,937,1062,906,1149,1080,901,1097,1015,1214,1146,1067,1095,1056,1067,1012,1016,947,968,1233,980,1154,956,1156,963,1008,987,1178,1089,1148,1248,1469,52],successes:[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0]};compressedData.data=byteArray;assert(typeof Module.LZ4==="object","LZ4 not present - was your app build with  -s LZ4=1  ?");Module.LZ4.loadPackage({metadata:metadata,compressedData:compressedData});Module["removeRunDependency"]("datafile_manimlib.data")}Module["addRunDependency"]("datafile_manimlib.data");if(!Module.preloadResults)Module.preloadResults={};Module.preloadResults[PACKAGE_NAME]={fromCache:false};if(fetched){processPackageData(fetched);fetched=null}else{fetchedCallback=processPackageData}}if(Module["calledRun"]){runWithFS()}else{if(!Module["preRun"])Module["preRun"]=[];Module["preRun"].push(runWithFS)}};loadPackage({files:[{filename:"/lib/python3.7/site-packages/manimlib-0.1.11.dev91-py3.7.egg-info/SOURCES.txt",start:0,end:2801,audio:0},{filename:"/lib/python3.7/site-packages/manimlib-0.1.11.dev91-py3.7.egg-info/requires.txt",start:2801,end:2814,audio:0},{filename:"/lib/python3.7/site-packages/manimlib-0.1.11.dev91-py3.7.egg-info/pbr.json",start:2814,end:2862,audio:0},{filename:"/lib/python3.7/site-packages/manimlib-0.1.11.dev91-py3.7.egg-info/top_level.txt",start:2862,end:2871,audio:0},{filename:"/lib/python3.7/site-packages/manimlib-0.1.11.dev91-py3.7.egg-info/entry_points.txt",start:2871,end:2912,audio:0},{filename:"/lib/python3.7/site-packages/manimlib-0.1.11.dev91-py3.7.egg-info/dependency_links.txt",start:2912,end:2913,audio:0},{filename:"/lib/python3.7/site-packages/manimlib-0.1.11.dev91-py3.7.egg-info/not-zip-safe",start:2913,end:2914,audio:0},{filename:"/lib/python3.7/site-packages/manimlib-0.1.11.dev91-py3.7.egg-info/PKG-INFO",start:2914,end:11925,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/media_dir.txt",start:11925,end:11930,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/__init__.py",start:11930,end:13933,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/config.py",start:13933,end:22680,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/ctex_template.tex",start:22680,end:23174,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/tex_template.tex",start:23174,end:23668,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/extract_scene.py",start:23668,end:28602,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/imports.py",start:28602,end:32197,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/constants.py",start:32197,end:39667,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/utils/config_ops.py",start:39667,end:42468,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/utils/images.py",start:42468,end:43082,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/utils/simple_functions.py",start:43082,end:45359,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/utils/color.py",start:45359,end:48100,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/utils/rate_functions.py",start:48100,end:50266,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/utils/strings.py",start:50266,end:52129,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/utils/iterables.py",start:52129,end:55247,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/utils/file_ops.py",start:55247,end:57252,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/utils/paths.py",start:57252,end:58676,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/utils/tex_file_writing.py",start:58676,end:61592,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/utils/sounds.py",start:61592,end:62331,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/utils/space_ops.py",start:62331,end:68199,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/utils/bezier.py",start:68199,end:72759,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/mobject/probability.py",start:72759,end:80644,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/mobject/numbers.py",start:80644,end:85250,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/mobject/geometry.py",start:85250,end:109944,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/mobject/value_tracker.py",start:109944,end:111341,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/mobject/number_line.py",start:111341,end:117559,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/mobject/shape_matchers.py",start:117559,end:119791,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/mobject/changing.py",start:119791,end:122993,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/mobject/mobject.py",start:122993,end:160399,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/mobject/mobject_update_utils.py",start:160399,end:162993,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/mobject/vector_field.py",start:162993,end:174473,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/mobject/three_d_shading_utils.py",start:174473,end:175874,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/mobject/three_dimensions.py",start:175874,end:180156,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/mobject/coordinate_systems.py",start:180156,end:193599,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/mobject/functions.py",start:193599,end:196693,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/mobject/three_d_utils.py",start:196693,end:198265,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/mobject/matrix.py",start:198265,end:204068,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/mobject/frame.py",start:204068,end:205111,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/mobject/types/image_mobject.py",start:205111,end:208791,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/mobject/types/vectorized_mobject.py",start:208791,end:241998,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/mobject/types/point_cloud_mobject.py",start:241998,end:250324,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/mobject/svg/brace.py",start:250324,end:255100,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/mobject/svg/drawings.py",start:255100,end:288826,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/mobject/svg/svg_mobject.py",start:288826,end:304499,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/mobject/svg/tex_mobject.py",start:304499,end:315342,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/animation/growing.py",start:315342,end:316593,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/animation/numbers.py",start:316593,end:318315,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/animation/transform.py",start:318315,end:328085,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/animation/composition.py",start:328085,end:333023,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/animation/movement.py",start:333023,end:335243,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/animation/creation.py",start:335243,end:340389,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/animation/animation.py",start:340389,end:345554,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/animation/indication.py",start:345554,end:353431,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/animation/specialized.py",start:353431,end:356057,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/animation/rotation.py",start:356057,end:357475,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/animation/fading.py",start:357475,end:361501,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/animation/update.py",start:361501,end:362737,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/camera/moving_camera.py",start:362737,end:365843,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/camera/three_d_camera.py",start:365843,end:374350,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/camera/camera.py",start:374350,end:390903,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/camera/multi_camera.py",start:390903,end:393143,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/camera/mapping_camera.py",start:393143,end:397646,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/scene/vector_space_scene.py",start:397646,end:416159,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/scene/media_dir.txt",start:416159,end:416164,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/scene/zoomed_scene.py",start:416164,end:419677,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/scene/sample_space_scene.py",start:419677,end:424979,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/scene/moving_camera_scene.py",start:424979,end:426149,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/scene/three_d_scene.py",start:426149,end:432582,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/scene/reconfigurable_scene.py",start:432582,end:434629,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/scene/graph_scene.py",start:434629,end:454215,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/scene/scene.py",start:454215,end:472705,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/web/utils.py",start:472705,end:474469,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/web/web_scene.py",start:474469,end:476556,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/container/container.py",start:476556,end:477264,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/files/Bubbles_thought.svg",start:477264,end:478607,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/files/Bubbles_speech.svg",start:478607,end:479323,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/files/PiCreatures_plain.svg",start:479323,end:481160,audio:0},{filename:"/bin/manim",start:481160,end:481332,audio:0}],remote_package_size:256331,package_uuid:"660fe607-bac4-4078-b540-054c1f690a8a"})})();