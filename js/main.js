function togglePadding() {
			columns = document.getElementsByClassName("gallery-column")
			console.log(columns);

			for (i = 0; i < columns.length; i++) {
				currentColumn = columns[i]

				images = currentColumn.getElementsByTagName("IMG")

				for (k = 0; k < images.length; k++) {
					if (images[k].style.padding == "5px") {
						images[k].style.padding = "0px"
					} else {
						images[k].style.padding = "5px";
					}

				}	
			
			}
		}
		video = document.getElementById("my_video")
		video.volume = 0.0;

		function changeVolume(deltaVolume){
			video = document.getElementById("my_video")
			nextVolume = video.volume + deltaVolume;
				
			if (nextVolume > 0 && nextVolume < 1) {
				video.volume = nextVolume;
			} 
		}
		