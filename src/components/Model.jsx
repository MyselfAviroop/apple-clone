import gsap from "gsap";
import ModelView from "./Modelview";
import { useEffect, useRef, useState } from "react";
import { yellowImg } from "../utils";
import * as THREE from 'three';
import { Canvas } from "@react-three/fiber";
import { View } from "@react-three/drei";
import { models, sizes } from "../constants";
import {animateWithGsapTimeline} from "../utils/animations";

const Model = () => {
  const [size, setSize] = useState('small');
  const [model, setModel] = useState({
    title: 'iPhone 15 Pro in Natural Titanium',
    color: ['#8F8A81', '#FFE7B9', '#6F6C64'],
    img: yellowImg,
  });

  // Camera control for the model view
  const cameraControlSmall = useRef();
  const cameraControlLarge = useRef();

  // Model references
  const small = useRef(new THREE.Group());
  const large = useRef(new THREE.Group());

  // Rotation states
  const [smallRotation, setSmallRotation] = useState(0);
  const [largeRotation, setLargeRotation] = useState(0);

  // Initialize GSAP timeline correctly
  const tl = useRef(gsap.timeline());

  useEffect(() => {
    // Clear previous timeline to prevent stacking animations
    tl.current.clear();

    if (size === 'large') {
      animateWithGsapTimeline(
        tl.current,
        small, // Pass the ref, not the rotation state
        smallRotation,
        '#view1',
        '#view2',
        {
          x: '-100%', // GSAP uses `x` and `y` for translations
          duration: 2,
          ease: 'power2.inOut' // Ensure consistency with your animation function
        }
      );
    }

    if (size === 'small') { 
      animateWithGsapTimeline(
        tl.current,
        large, // Pass the ref, not the rotation state
        largeRotation,
        '#view2',
        '#view1',
        {
          x: '0%', // GSAP uses `x` and `y` for translations
          duration: 2,
          ease: 'power2.inOut' // Ensure consistency with your animation function
        }
      );
    }
  }, [size, tl, small, large, smallRotation, largeRotation]);

  // If useGSAP is necessary, ensure it's correctly implemented
  // For now, using useEffect to handle the heading animation
  useEffect(() => {
    gsap.to('#heading', { y: 0, opacity: 1, duration: 1, ease: 'power2.out' });
  }, []);

  return (
    <section className="common-padding">
      <div className="screen-max-width">
        <h1 id="heading" className="section-heading">
          Take a closer look.
        </h1>

        <div className="flex flex-col items-center mt-5">
          <div className="w-full h-[75vh] md:h-[90vh] overflow-hidden relative">
            <ModelView 
              index={1}
              groupRef={small}
              gsapType="view1"
              controlRef={cameraControlSmall}
              setRotationState={setSmallRotation}
              item={model}
              size={size}
            />  

            <ModelView 
              index={2}
              groupRef={large}
              gsapType="view2"
              controlRef={cameraControlLarge}
              setRotationState={setLargeRotation}
              item={model}
              size={size}
            />

            <Canvas
              className="w-full h-full"
              style={{
                position: 'fixed',
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                overflow: 'hidden'
              }}
              eventSource={document.getElementById('root')}
            >
              <View.Port />
            </Canvas>
          </div>

          <div className="mx-auto w-full">
            <p className="text-sm font-light text-center mb-5">{model.title}</p>

            <div className="flex-center">
              <ul className="color-container">
                {models.map((item, i) => (
                  <li 
                    key={i} 
                    className="w-6 h-6 rounded-full mx-2 cursor-pointer" 
                    style={{ backgroundColor: item.color[0] }} 
                    onClick={() => setModel(item)} 
                  />
                ))}
              </ul>

              <button className="size-btn-container">
                {sizes.map(({ label, value }) => (
                  <span 
                    key={label} 
                    className="size-btn" 
                    style={{ 
                      backgroundColor: size === value ? 'white' : 'transparent', 
                      color: size === value ? 'black' : 'white'
                    }} 
                    onClick={() => setSize(value)}
                  >
                    {label}
                  </span>
                ))}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Model;
