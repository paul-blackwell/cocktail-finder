import React, {useEffect, useRef} from 'react';
import {gsap, Back, Power2} from "gsap/all";

export default function AnimatedSVG() {


	const tl1 = gsap.timeline(); 
	const tl2 = gsap.timeline(); 
	const tl3 = gsap.timeline(); 
	const tl4 = gsap.timeline(); 
	const tl5 = gsap.timeline(); 
	const tl6 = gsap.timeline();

	let layer1 = useRef(null);
	let layer2 = useRef(null);
	let layer3 = useRef(null);
	let layer4 = useRef(null);
	let layer5 = useRef(null);
	let layer6 = useRef(null);


	useEffect(() => {
	
	tl1.to(layer1,{ rotation: 0, opacity: 0, scaleX: 1, scaleY: 1, x: 0, y: 0, transformOrigin:"center center", duration: 0, ease: Power2.easeNone } ); tl1.to(layer1,{ rotation: 0, opacity: 0, scaleX: 1, scaleY: 1, x: 0, y: 0, transformOrigin:"center center", duration: 0.5, ease: Power2.easeNone } ); 
    tl1.to(layer1,{ rotation: 0, opacity: 1, scaleX: 1, scaleY: 1, x: 0, y: 0, transformOrigin:"center center", duration: 1, ease: Power2.easeNone } ); tl1.to(layer1,{ rotation: 0, opacity: 1, scaleX: 1, scaleY: 1, x: 0, y: 0, transformOrigin:"center center", duration: 0.9, ease: Power2.easeNone } ); 
    tl1.to(layer1,{ rotation: 0, opacity: 0, scaleX: 1, scaleY: 1, x: 0, y: 0, transformOrigin:"center center", duration: 0.6, ease: Power2.easeNone } ); tl2.to(layer2,{ rotation: 0, opacity: 0, scaleX: 0, scaleY: 0, x: 0, y: 0, transformOrigin:"center center", duration: 0, ease: Power2.easeNone } ); 
    tl2.to(layer2,{ rotation: 0, opacity: 1, scaleX: 1, scaleY: 1, x: 0, y: 0, transformOrigin:"center center", duration: 0.5, ease: Power2.easeNone } ); tl2.to(layer2,{ rotation: 0, opacity: 1, scaleX: 1, scaleY: 1, x: 0, y: 0, transformOrigin:"center center", duration: 2.2, ease: Power2.easeNone } ); 
    tl2.to(layer2,{ rotation: 0, opacity: 0, scaleX: .8, scaleY: .8, x: 0, y: 0, transformOrigin:"center center", duration: 0.8, ease: Power2.easeNone } ); tl3.to(layer3,{ rotation: 0, opacity: 0, scaleX: 1, scaleY: 1, x: 0, y: 0, transformOrigin:"center center", duration: 0, ease: Power2.easeNone } ); 
    tl3.to(layer3,{ rotation: 0, opacity: 0, scaleX: 1, scaleY: 1, x: 0, y: 0, transformOrigin:"center center", duration: 1.5, ease: Power2.easeNone } ); tl3.to(layer3,{ rotation: -5, opacity: 1, scaleX: 1, scaleY: 1, x: 0, y: 0, transformOrigin:"center center", duration: 0.9, ease: Power2.easeNone } ); 
    tl3.to(layer3,{ rotation: 0, opacity: 0, scaleX: 1, scaleY: 1, x: 0, y: 0, transformOrigin:"center center", duration: 0.6, ease: Power2.easeNone } ); tl4.to(layer4,{ rotation: 0, opacity: 0, scaleX: 1, scaleY: 1, x: 0, y: 0, transformOrigin:"center center", duration: 0, ease: Power2.easeNone } ); 
    tl4.to(layer4,{ rotation: 0, opacity: 0, scaleX: 1, scaleY: 1, x: 0, y: 0, transformOrigin:"center center", duration: 0.5, ease: Power2.easeNone } ); tl4.to(layer4,{ rotation: 0, opacity: 1, scaleX: 1, scaleY: 1, x: 0, y: -20, transformOrigin:"center center", duration: 1.2, ease: Power2.easeNone } ); 
    tl4.to(layer4,{ rotation: 0, opacity: 1, scaleX: 1, scaleY: 1, x: 0, y: -20, transformOrigin:"center center", duration: 0.7, ease: Power2.easeNone } ); tl4.to(layer4,{ rotation: 0, opacity: 0, scaleX: 1, scaleY: 1, x: 0, y: 0, transformOrigin:"center center", duration: 0.6, ease: Power2.easeNone } ); 
    tl5.to(layer5,{ rotation: 0, opacity: 0, scaleX: 1, scaleY: 1, x: 0, y: 0, transformOrigin:"center center", duration: 0, ease: Power2.easeNone } ); tl5.to(layer5,{ rotation: 0, opacity: 0, scaleX: 1, scaleY: 1, x: 0, y: 0, transformOrigin:"center center", duration: 0.5, ease: Power2.easeNone } ); 
    tl5.to(layer5,{ rotation: 0, opacity: 1, scaleX: 1, scaleY: 1, x: 0, y: -20, transformOrigin:"center center", duration: 0.8, ease: Power2.easeNone } ); tl5.to(layer5,{ rotation: 0, opacity: 1, scaleX: 1, scaleY: 1, x: 0, y: -20, transformOrigin:"center center", duration: 1.1, ease: Power2.easeNone } ); 
    tl5.to(layer5,{ rotation: 0, opacity: 0, scaleX: 1, scaleY: 1, x: 0, y: 0, transformOrigin:"center center", duration: 0.6, ease: Power2.easeNone } ); tl6.to(layer6,{ rotation: 0, opacity: 0, scaleX: 1, scaleY: 1, x: 0, y: 0, transformOrigin:"center center", duration: 0, ease: Power2.easeNone } ); 
    tl6.to(layer6,{ rotation: 0, opacity: 0, scaleX: 1, scaleY: 1, x: 0, y: 0, transformOrigin:"center center", duration: 0.5, ease: Power2.easeNone } ); tl6.to(layer6,{ rotation: 0, opacity: 1, scaleX: 1, scaleY: 1, x: 0, y: -20, transformOrigin:"center center", duration: 0.5, ease: Power2.easeNone } ); 
    tl6.to(layer6,{ rotation: 0, opacity: 1, scaleX: 1, scaleY: 1, x: 0, y: -20, transformOrigin:"center center", duration: 1.4, ease: Power2.easeNone } ); tl6.to(layer6,{ rotation: 0, opacity: 0, scaleX: 1, scaleY: 1, x: 0, y: 0, transformOrigin:"center center", duration: 0.6, ease: Power2.easeNone } ); 
		

    }, [tl1,tl2,tl3,tl4,tl5, tl6])


	return (
		<svg x="0px" y="0px" viewBox="0 0 512 512"   class="h-auto w-full">
		<g ref={el => { layer1 = el }} id="2d56749a-4caf-4005-8d11-0739a95d8d59">
			<path class="st0" d="M356.1,36C327,6.9,279.9,6.9,250.8,36c-2.7,2.7-5.2,5.6-7.4,8.7l7,7c11.7-15.7,30.4-25.9,51.5-25.9 c35.4,0,64.2,28.7,64.2,64.2c0,21.1-10.2,39.8-25.9,51.5l7.4,7.4c3-2.2,5.9-4.7,8.7-7.4C385.2,112.3,385.2,65.1,356.1,36z"></path>
			<path class="st1" d="M367,25.8c34.4,34.4,34.4,90.3,0,124.6c-5,5-13,5-17.9,0L242.4,43.7c-5-5-5-13,0-17.9 C276.7-8.6,332.6-8.6,367,25.8z"></path>
			<path class="st2" d="M391.9,75.9c-2.5-18.3-10.8-36-24.9-50.1c-34.4-34.4-90.3-34.4-124.6,0c-5,5-5,13,0,17.9l31.2,31.2 C307.2,44.8,358.6,45.2,391.9,75.9z"></path>
			<path class="st3" d="M356.1,36c29.1,29.1,29.1,76.3,0,105.3c-2.7,2.7-5.6,5.2-8.7,7.4L243.3,44.7c2.2-3,4.7-5.9,7.4-8.7 C279.9,6.9,327,6.9,356.1,36z"></path>
			<path class="st4" d="M376.7,75.3l-81.3,21.5l21.5-81.3C331.3,18,345,24.9,356.1,36C367.2,47.1,374.1,60.9,376.7,75.3z"></path>
		</g>
		<g ref={el => { layer2 = el }} id="553314e7-07ba-430d-9e0d-b1e4bcec5369">
			<path class="st5" d="M313.4,83.3c-3.4-3.5-8.1-5.5-12.9-5.5H137.2c-4.9,0-9.5,2-12.9,5.5c-3.4,3.5-5.2,8.3-5,13.1l15.5,398.3 c0.4,9.6,8.3,17.2,17.9,17.2h132.2c9.6,0,17.6-7.6,17.9-17.2l15.6-398.3C318.5,91.6,316.7,86.8,313.4,83.3z"></path>
			<path class="st6" d="M194.1,494.8L178.5,96.5c-0.2-4.9,1.6-9.6,5-13.1c3.4-3.5,8.1-5.5,12.9-5.5h-59.3c-4.9,0-9.5,2-12.9,5.5 c-3.4,3.5-5.2,8.3-5,13.1l15.5,398.3c0.4,9.6,8.3,17.2,17.9,17.2H212C202.4,512,194.4,504.4,194.1,494.8z"></path>
			<path class="st7" d="M275.6,460.5c-1.7-1.8-4-2.8-6.5-2.8H168.5c-2.4,0-4.8,1-6.5,2.8c-1.7,1.8-2.6,4.1-2.5,6.6l0.4,10.2 c0.2,4.8,4.1,8.6,9,8.6h99.9c4.8,0,8.8-3.8,9-8.6l0.4-10.2C278.2,464.7,277.3,462.3,275.6,460.5z"></path>
			<path class="st5" d="M168.5,457.8c-2.4,0-4.8,1-6.5,2.8c-1.7,1.8-2.6,4.1-2.5,6.6l0.4,10.2c0.2,4.8,4.1,8.6,9,8.6h24.9l-1.1-28.1 H168.5z"></path>
			<path class="st8" d="M288.3,139.9c-2.4-2.5-5.8-4-9.3-4H158.6c-3.5,0-6.9,1.4-9.3,4c-2.4,2.5-3.7,5.9-3.6,9.4l10.5,269.9 c0.3,6.9,6,12.4,12.9,12.4h99.4c6.9,0,12.6-5.5,12.9-12.4l10.5-269.9C292,145.9,290.7,142.5,288.3,139.9z"></path>
			<path class="st9" d="M208,419.3l-10.5-269.9c-0.1-3.5,1.2-6.9,3.6-9.4c2.4-2.5,5.8-4,9.3-4h-51.8c-3.5,0-6.9,1.4-9.3,4 c-2.4,2.5-3.7,5.9-3.6,9.4l10.5,269.9c0.3,6.9,6,12.4,12.9,12.4h51.8C213.9,431.7,208.2,426.2,208,419.3z"></path>
			<g>
				<path class="st9" d="M259.3,179.9c-4.3,0-7.7-3.8-7.5-8.1l0.2-4.7c0.2-4.3,3.8-7.7,8.1-7.5c4.3,0.2,7.7,3.8,7.5,8.1l-0.2,4.7 C267.3,176.6,265.5,179.9,259.3,179.9z"></path>
				<path class="st9" d="M257.6,223.4c-4.3,0-7.7-3.8-7.5-8.1l0.8-20.5c0.2-4.3,3.8-7.7,8.1-7.5c4.3,0.2,7.7,3.8,7.5,8.1l-0.8,20.5 C265.6,220.1,263.7,223.4,257.6,223.4z"></path>
			</g>
		</g>
		<g ref={el => { layer3 = el }} id="71a0dd50-3e57-4fe8-bee6-8a1a257f479d">
			<path class="st10" d="M204.5,121.6c-4.1-1.3-7.2-4.7-6.5-9l0,0c0-0.3,4.7-32.3-16.2-51.5c-3.2-2.9-3.4-7.9-0.5-11.1 c2.9-3.2,7.9-3.4,11.1-0.5c27.2,25,21.3,63.9,21.1,65.5C212.9,119,209.7,123.3,204.5,121.6z"></path>
			<circle class="st11" cx="205.7" cy="138.4" r="32.9"></circle>
			<path class="st12" d="M199.5,138.5c0-13.4,8.1-25,19.6-30.1c-4.1-1.8-8.6-2.8-13.3-2.8c-18.2,0-32.9,14.7-32.9,32.9 s14.7,32.9,32.9,32.9c4.7,0,9.2-1,13.3-2.8C207.5,163.4,199.5,151.9,199.5,138.5z"></path>
		</g>
		<g ref={el => { layer4 = el }} id="331de107-a527-4583-9004-c2b18a9b60b5">
			<path class="st7" d="M204.8,291.9L182.9,270c-7.7-7.7-7.7-20.4,0-28.1l21.9-21.9c7.7-7.7,20.4-7.7,28.1,0l21.9,21.9 c7.7,7.7,7.7,20.4,0,28.1l-21.9,21.9C225.1,299.7,212.5,299.7,204.8,291.9z"></path>
		</g>
		<g ref={el => { layer5 = el }} id="7dfaca51-2ae2-4410-8bc7-781437ea0faf">
			<path class="st0" d="M214.8,338.9L192.9,317c-7.7-7.7-7.7-20.4,0-28.1l21.9-21.9c7.7-7.7,20.4-7.7,28.1,0l21.9,21.9 c7.7,7.7,7.7,20.4,0,28.1l-21.9,21.9C235.1,346.6,222.5,346.6,214.8,338.9z"></path>
		</g>
		<g ref={el => { layer6 = el }} id="6a623f90-bc33-4559-a8b5-53fce2981064">
			<path class="st13" d="M204.8,375.4l-21.9-21.9c-7.7-7.7-7.7-20.4,0-28.1l21.9-21.9c7.7-7.7,20.4-7.7,28.1,0l21.9,21.9 c7.7,7.7,7.7,20.4,0,28.1l-21.9,21.9C225.1,383.1,212.5,383.1,204.8,375.4z"></path>
		</g>
	</svg>
	)
}
