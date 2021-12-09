function classPhotos(redShirtHeights, blueShirtHeights) {
    redShirtHeights.sort((a,b) => a-b);
    blueShirtHeights.sort((a,b) => a-b);
    const firstRowIsBlue = (blueShirtHeights[0] < redShirtHeights[0]) ? true : false;

	for(let i=0; i < redShirtHeights.length; i++){
		const red = redShirtHeights[i];
		const blue = blueShirtHeights[i];

		if(firstRowIsBlue){
			if(blue >= red) return false;
		}
		else{
			if(red >= blue) return false;
		}
	}

	return true;
}
