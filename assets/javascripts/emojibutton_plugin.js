jsToolBar.prototype.elements.emoji = {
    type: 'button',
    title: 'Emoji',
    fn: {
        wiki: function() {
            precodeTextField = this;

            var emojiPlanesTitles = ["People", "Nature", "Objects", "Places", "Symbols"];
			var emojiPeople = ["bowtie","unicode/1f604","unicode/1f606","unicode/1f60a","unicode/1f603","unicode/263a","unicode/1f60f","unicode/1f60d","unicode/1f618","unicode/1f61a","unicode/1f633","unicode/1f60c","unicode/1f606","unicode/1f601","unicode/1f609","unicode/1f61c","unicode/1f61d","unicode/1f600","unicode/1f617","unicode/1f619","unicode/1f61b","unicode/1f634","unicode/1f61f","unicode/1f626","unicode/1f627","unicode/1f62e","unicode/1f62c","unicode/1f615","unicode/1f62f","unicode/1f611","unicode/1f612","unicode/1f605","unicode/1f613","unicode/1f625","unicode/1f629","unicode/1f614","unicode/1f61e","unicode/1f616","unicode/1f628","unicode/1f630","unicode/1f623","unicode/1f622","unicode/1f62d","unicode/1f602","unicode/1f632","unicode/1f631","neckbeard","unicode/1f62b","unicode/1f620","unicode/1f621","unicode/1f624","unicode/1f62a","unicode/1f60b","unicode/1f637","unicode/1f60e","unicode/1f635","unicode/1f47f","unicode/1f608","unicode/1f610","unicode/1f636","unicode/1f607","unicode/1f47d","unicode/1f49b","unicode/1f499","unicode/1f49c","unicode/2764","unicode/1f49a","unicode/1f494","unicode/1f493","unicode/1f497","unicode/1f495","unicode/1f49e","unicode/1f498","unicode/1f496","unicode/2728","unicode/2b50","unicode/1f31f","unicode/1f4ab","unicode/1f4a5","unicode/1f4a5","unicode/1f4a2","unicode/2757","unicode/2753","unicode/2755","unicode/2754","unicode/1f4a4","unicode/1f4a8","unicode/1f4a6","unicode/1f3b6","unicode/1f3b5","unicode/1f525","unicode/1f4a9","unicode/1f4a9","unicode/1f4a9","unicode/1f44d","unicode/1f44d","unicode/1f44e","unicode/1f44e","unicode/1f44c","unicode/1f44a","unicode/1f44a","unicode/270a","unicode/270c","unicode/1f44b","unicode/270b","unicode/270b","unicode/1f450","unicode/261d","unicode/1f447","unicode/1f448","unicode/1f449","unicode/1f64c","unicode/1f64f","unicode/1f446","unicode/1f44f","unicode/1f4aa","metal","fu","unicode/1f6b6","unicode/1f3c3","unicode/1f3c3","unicode/1f46b","unicode/1f46a","unicode/1f46c","unicode/1f46d","unicode/1f483","unicode/1f46f","unicode/1f646","unicode/1f645","unicode/1f481","unicode/1f64b","unicode/1f470","unicode/1f64e","unicode/1f64d","unicode/1f647","unicode/1f48f","unicode/1f491","unicode/1f486","unicode/1f487","unicode/1f485","unicode/1f466","unicode/1f467","unicode/1f469","unicode/1f468","unicode/1f476","unicode/1f475","unicode/1f474","unicode/1f471","unicode/1f472","unicode/1f473","unicode/1f477","unicode/1f46e","unicode/1f47c","unicode/1f478","unicode/1f63a","unicode/1f638","unicode/1f63b","unicode/1f63d","unicode/1f63c","unicode/1f640","unicode/1f63f","unicode/1f639","unicode/1f63e","unicode/1f479","unicode/1f47a","unicode/1f648","unicode/1f649","unicode/1f64a","unicode/1f482","unicode/1f480","unicode/1f43e","unicode/1f444","unicode/1f48b","unicode/1f4a7","unicode/1f442","unicode/1f440","unicode/1f443","unicode/1f445","unicode/1f48c","unicode/1f464","unicode/1f465","unicode/1f4ac","unicode/1f4ad","feelsgood","finnadie","goberserk","godmode","hurtrealbad","rage1","rage2","rage3","rage4","suspect","trollface"];
			var emojiNature = ["unicode/2600","unicode/2614","unicode/2601","unicode/2744","unicode/26c4","unicode/26a1","unicode/1f300","unicode/1f301","unicode/1f30a","unicode/1f431","unicode/1f436","unicode/1f42d","unicode/1f439","unicode/1f430","unicode/1f43a","unicode/1f438","unicode/1f42f","unicode/1f428","unicode/1f43b","unicode/1f437","unicode/1f43d","unicode/1f42e","unicode/1f417","unicode/1f435","unicode/1f412","unicode/1f434","unicode/1f40e","unicode/1f42b","unicode/1f411","unicode/1f418","unicode/1f43c","unicode/1f40d","unicode/1f426","unicode/1f424","unicode/1f425","unicode/1f423","unicode/1f414","unicode/1f427","unicode/1f422","unicode/1f41b","unicode/1f41d","unicode/1f41c","unicode/1f41e","unicode/1f40c","unicode/1f419","unicode/1f420","unicode/1f41f","unicode/1f433","unicode/1f40b","unicode/1f42c","unicode/1f404","unicode/1f40f","unicode/1f400","unicode/1f403","unicode/1f405","unicode/1f407","unicode/1f409","unicode/1f410","unicode/1f413","unicode/1f415","unicode/1f416","unicode/1f401","unicode/1f402","unicode/1f432","unicode/1f421","unicode/1f40a","unicode/1f42a","unicode/1f406","unicode/1f408","unicode/1f429","unicode/1f43e","unicode/1f490","unicode/1f338","unicode/1f337","unicode/1f340","unicode/1f339","unicode/1f33b","unicode/1f33a","unicode/1f341","unicode/1f343","unicode/1f342","unicode/1f33f","unicode/1f344","unicode/1f335","unicode/1f334","unicode/1f332","unicode/1f333","unicode/1f330","unicode/1f331","unicode/1f33c","unicode/1f33e","unicode/1f41a","unicode/1f310","unicode/1f31e","unicode/1f31d","unicode/1f31a","unicode/1f311","unicode/1f312","unicode/1f313","unicode/1f314","unicode/1f315","unicode/1f316","unicode/1f317","unicode/1f318","unicode/1f31c","unicode/1f31b","unicode/1f314","unicode/1f30d","unicode/1f30e","unicode/1f30f","unicode/1f30b","unicode/1f30c","unicode/26c5","octocat","shipit"];
			var emojiObjects = ["unicode/1f38d","unicode/1f49d","unicode/1f38e","unicode/1f392","unicode/1f393","unicode/1f38f","unicode/1f386","unicode/1f387","unicode/1f390","unicode/1f391","unicode/1f383","unicode/1f47b","unicode/1f385","unicode/1f384","unicode/1f381","unicode/1f514","unicode/1f515","unicode/1f38b","unicode/1f389","unicode/1f38a","unicode/1f388","unicode/1f52e","unicode/1f4bf","unicode/1f4c0","unicode/1f4be","unicode/1f4f7","unicode/1f4f9","unicode/1f3a5","unicode/1f4bb","unicode/1f4fa","unicode/1f4f1","unicode/260e","unicode/260e","unicode/1f4de","unicode/1f4df","unicode/1f4e0","unicode/1f4bd","unicode/1f4fc","unicode/1f509","unicode/1f508","unicode/1f507","unicode/1f4e2","unicode/1f4e3","unicode/231b","unicode/23f3","unicode/23f0","unicode/231a","unicode/1f4fb","unicode/1f4e1","unicode/27bf","unicode/1f50d","unicode/1f50e","unicode/1f513","unicode/1f512","unicode/1f50f","unicode/1f510","unicode/1f511","unicode/1f4a1","unicode/1f526","unicode/1f506","unicode/1f505","unicode/1f50c","unicode/1f50b","unicode/1f4f2","unicode/2709","unicode/1f4eb","unicode/1f4ee","unicode/1f6c0","unicode/1f6c1","unicode/1f6bf","unicode/1f6bd","unicode/1f527","unicode/1f529","unicode/1f528","unicode/1f4ba","unicode/1f4b0","unicode/1f4b4","unicode/1f4b5","unicode/1f4b7","unicode/1f4b6","unicode/1f4b3","unicode/1f4b8","unicode/1f4e7","unicode/1f4e5","unicode/1f4e4","unicode/2709","unicode/1f4e8","unicode/1f4ef","unicode/1f4ea","unicode/1f4ec","unicode/1f4ed","unicode/1f6aa","unicode/1f6ac","unicode/1f4a3","unicode/1f52b","unicode/1f52a","unicode/1f48a","unicode/1f489","unicode/1f4c4","unicode/1f4c3","unicode/1f4d1","unicode/1f4ca","unicode/1f4c8","unicode/1f4c9","unicode/1f4dc","unicode/1f4cb","unicode/1f4c6","unicode/1f4c5","unicode/1f4c7","unicode/1f4c1","unicode/1f4c2","unicode/2702","unicode/1f4cc","unicode/1f4ce","unicode/2712","unicode/270f","unicode/1f4cf","unicode/1f4d0","unicode/1f4d5","unicode/1f4d7","unicode/1f4d8","unicode/1f4d9","unicode/1f4d3","unicode/1f4d4","unicode/1f4d2","unicode/1f4da","unicode/1f516","unicode/1f4db","unicode/1f52c","unicode/1f52d","unicode/1f4f0","unicode/1f3c8","unicode/1f3c0","unicode/26bd","unicode/26be","unicode/1f3be","unicode/1f3b1","unicode/1f3c9","unicode/1f3b3","unicode/26f3","unicode/1f6b5","unicode/1f6b4","unicode/1f3c7","unicode/1f3c2","unicode/1f3ca","unicode/1f3c4","unicode/1f3bf","unicode/2660","unicode/2665","unicode/2663","unicode/2666","unicode/1f48e","unicode/1f48d","unicode/1f3c6","unicode/1f3bc","unicode/1f3b9","unicode/1f3bb","unicode/1f47e","unicode/1f3ae","unicode/1f0cf","unicode/1f3b4","unicode/1f3b2","unicode/1f3af","unicode/1f004","unicode/1f3ac","unicode/1f4dd","unicode/1f4dd","unicode/1f4d6","unicode/1f3a8","unicode/1f3a4","unicode/1f3a7","unicode/1f3ba","unicode/1f3b7","unicode/1f3b8","unicode/1f45e","unicode/1f461","unicode/1f460","unicode/1f484","unicode/1f462","unicode/1f455","unicode/1f455","unicode/1f454","unicode/1f45a","unicode/1f457","unicode/1f3bd","unicode/1f456","unicode/1f458","unicode/1f459","unicode/1f380","unicode/1f3a9","unicode/1f451","unicode/1f452","unicode/1f45e","unicode/1f302","unicode/1f4bc","unicode/1f45c","unicode/1f45d","unicode/1f45b","unicode/1f453","unicode/1f3a3","unicode/2615","unicode/1f375","unicode/1f376","unicode/1f37c","unicode/1f37a","unicode/1f37b","unicode/1f378","unicode/1f379","unicode/1f377","unicode/1f374","unicode/1f355","unicode/1f354","unicode/1f35f","unicode/1f357","unicode/1f356","unicode/1f35d","unicode/1f35b","unicode/1f364","unicode/1f371","unicode/1f363","unicode/1f365","unicode/1f359","unicode/1f358","unicode/1f35a","unicode/1f35c","unicode/1f372","unicode/1f362","unicode/1f361","unicode/1f373","unicode/1f35e","unicode/1f369","unicode/1f36e","unicode/1f366","unicode/1f368","unicode/1f367","unicode/1f382","unicode/1f370","unicode/1f36a","unicode/1f36b","unicode/1f36c","unicode/1f36d","unicode/1f36f","unicode/1f34e","unicode/1f34f","unicode/1f34a","unicode/1f34b","unicode/1f352","unicode/1f347","unicode/1f349","unicode/1f353","unicode/1f351","unicode/1f348","unicode/1f34c","unicode/1f350","unicode/1f34d","unicode/1f360","unicode/1f346","unicode/1f345","unicode/1f33d"];
			var emojiPlaces = ["unicode/1f3e0","unicode/1f3e1","unicode/1f3eb","unicode/1f3e2","unicode/1f3e3","unicode/1f3e5","unicode/1f3e6","unicode/1f3ea","unicode/1f3e9","unicode/1f3e8","unicode/1f492","unicode/26ea","unicode/1f3ec","unicode/1f3e4","unicode/1f307","unicode/1f306","unicode/1f3ef","unicode/1f3f0","unicode/26fa","unicode/1f3ed","unicode/1f5fc","unicode/1f5fe","unicode/1f5fb","unicode/1f304","unicode/1f305","unicode/1f320","unicode/1f5fd","unicode/1f309","unicode/1f3a0","unicode/1f308","unicode/1f3a1","unicode/26f2","unicode/1f3a2","unicode/1f6a2","unicode/1f6a4","unicode/26f5","unicode/26f5","unicode/1f6a3","unicode/2693","unicode/1f680","unicode/2708","unicode/1f681","unicode/1f682","unicode/1f68a","unicode/1f69e","unicode/1f6b2","unicode/1f6a1","unicode/1f69f","unicode/1f6a0","unicode/1f69c","unicode/1f699","unicode/1f698","unicode/1f697","unicode/1f697","unicode/1f695","unicode/1f696","unicode/1f69b","unicode/1f68c","unicode/1f68d","unicode/1f6a8","unicode/1f693","unicode/1f694","unicode/1f692","unicode/1f691","unicode/1f690","unicode/1f69a","unicode/1f68b","unicode/1f689","unicode/1f686","unicode/1f685","unicode/1f684","unicode/1f688","unicode/1f69d","unicode/1f683","unicode/1f68e","unicode/1f3ab","unicode/26fd","unicode/1f6a6","unicode/1f6a5","unicode/26a0","unicode/1f6a7","unicode/1f530","unicode/1f3e7","unicode/1f3b0","unicode/1f68f","unicode/1f488","unicode/2668","unicode/1f3c1","unicode/1f38c","unicode/1f3ee","unicode/1f5ff","unicode/1f3aa","unicode/1f3ad","unicode/1f4cd","unicode/1f6a9","unicode/1f1ef-1f1f5","unicode/1f1f0-1f1f7","unicode/1f1e8-1f1f3","unicode/1f1fa-1f1f8","unicode/1f1eb-1f1f7","unicode/1f1ea-1f1f8","unicode/1f1ee-1f1f9","unicode/1f1f7-1f1fa","unicode/1f1ec-1f1e7","unicode/1f1ec-1f1e7","unicode/1f1e9-1f1ea"];
			var emojiSymbols = ["unicode/0031-20e3","unicode/0032-20e3","unicode/0033-20e3","unicode/0034-20e3","unicode/0035-20e3","unicode/0036-20e3","unicode/0037-20e3","unicode/0038-20e3","unicode/0039-20e3","unicode/1f51f","unicode/1f522","unicode/0030-20e3","unicode/0023-20e3","unicode/1f523","unicode/25c0","unicode/2b07","unicode/25b6","unicode/2b05","unicode/1f520","unicode/1f521","unicode/1f524","unicode/2199","unicode/2198","unicode/27a1","unicode/2b06","unicode/2196","unicode/2197","unicode/23ec","unicode/23eb","unicode/1f53d","unicode/2935","unicode/2934","unicode/21a9","unicode/21aa","unicode/2194","unicode/2195","unicode/1f53c","unicode/1f503","unicode/1f504","unicode/23ea","unicode/23e9","unicode/2139","unicode/1f197","unicode/1f500","unicode/1f501","unicode/1f502","unicode/1f195","unicode/1f51d","unicode/1f199","unicode/1f192","unicode/1f193","unicode/1f196","unicode/1f3a6","unicode/1f201","unicode/1f4f6","unicode/1f239","unicode/1f234","unicode/1f23a","unicode/1f22f","unicode/1f237","unicode/1f236","unicode/1f235","unicode/1f21a","unicode/1f238","unicode/1f233","unicode/1f232","unicode/1f202","unicode/1f6bb","unicode/1f6b9","unicode/1f6ba","unicode/1f6bc","unicode/1f6ad","unicode/1f17f","unicode/267f","unicode/1f687","unicode/1f6c4","unicode/1f251","unicode/1f6be","unicode/1f6b0","unicode/1f6ae","unicode/3299","unicode/3297","unicode/24c2","unicode/1f6c2","unicode/1f6c5","unicode/1f6c3","unicode/1f250","unicode/1f191","unicode/1f198","unicode/1f194","unicode/1f6ab","unicode/1f51e","unicode/1f4f5","unicode/1f6af","unicode/1f6b1","unicode/1f6b3","unicode/1f6b7","unicode/1f6b8","unicode/26d4","unicode/2733","unicode/2734","unicode/1f49f","unicode/1f19a","unicode/1f4f3","unicode/1f4f4","unicode/1f4b9","unicode/1f4b1","unicode/2648","unicode/2649","unicode/264a","unicode/264b","unicode/264c","unicode/264d","unicode/264e","unicode/264f","unicode/2650","unicode/2651","unicode/2652","unicode/2653","unicode/26ce","unicode/1f52f","unicode/274e","unicode/1f170","unicode/1f171","unicode/1f18e","unicode/1f17e","unicode/1f4a0","unicode/267b","unicode/1f51a","unicode/1f51b","unicode/1f51c","unicode/1f550","unicode/1f55c","unicode/1f559","unicode/1f565","unicode/1f55a","unicode/1f566","unicode/1f55b","unicode/1f567","unicode/1f551","unicode/1f55d","unicode/1f552","unicode/1f55e","unicode/1f553","unicode/1f55f","unicode/1f554","unicode/1f560","unicode/1f555","unicode/1f561","unicode/1f556","unicode/1f562","unicode/1f557","unicode/1f563","unicode/1f558","unicode/1f564","unicode/1f4b2","unicode/00a9","unicode/00ae","unicode/2122","unicode/274c","unicode/2757","unicode/203c","unicode/2049","unicode/2b55","unicode/2716","unicode/2795","unicode/2796","unicode/2797","unicode/1f4ae","unicode/1f4af","unicode/2714","unicode/2611","unicode/1f518","unicode/1f517","unicode/27b0","unicode/3030","unicode/303d","unicode/1f531","unicode/2b1b","unicode/2b1c","unicode/2705","unicode/1f532","unicode/1f533","unicode/26ab","unicode/26aa","unicode/1f534","unicode/1f535","unicode/1f537","unicode/1f536","unicode/1f539","unicode/1f538","unicode/1f53a","unicode/1f53b","shipit"];

			var emojiIcons = [emojiPeople, emojiNature, emojiObjects, emojiPlaces, emojiSymbols];


            var hideJs = "hideModal(this);$('#emojiDialog').remove();return false;";
            var emojiDialog = '<div id="emojiDialog" title="Insert emoticon"></div>';

			var emojiTabs = '<div id="emojiTabs"><ul>';
			jQuery.each( emojiPlanesTitles, function( i, val ) {
				emojiTabs = emojiTabs + '<li><a href="#tabs-'+ (i+1) +'" style="cursor:pointer;">'+val+'</a></li>';
			});
			emojiTabs = emojiTabs + '</ul>';
			jQuery.each( emojiIcons, function( i, val ) {
				emojiTabs = emojiTabs + '<div id="tabs-'+ (i+1) +'">';

				jQuery.each( val, function( j, valIcon ) {
					emojiTabs = emojiTabs + '<img width="20" height="20" title=":'+valIcon+':" src="/images/emoji/'+valIcon+'.png" alt="'+valIcon+'" style="padding:3px;cursor:pointer;" onclick="precodeTextField.encloseSelection(\':'+valIcon+':\');'+hideJs+'" />';
				});

				emojiTabs = emojiTabs + '</div>';
			});
			emojiTabs = emojiTabs + '</div>';


            $("#main").append(emojiDialog);
            $("#emojiDialog").append(emojiTabs);
            $("#emojiTabs").tabs({ active: 0 });
            $("#emojiDialog").dialog({modal:true, width:'600px'});
        }
    }
}
