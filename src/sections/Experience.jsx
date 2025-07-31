import { Suspense, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useProgress, Html } from '@react-three/drei';

import Developer from '../components/Developer.jsx';
import { whatIDo } from '../constants/index.js';

function Loader() {
  const { progress } = useProgress();
  return (
    <Html center style={{ color: 'white' }}>
      {Math.round(progress)}% loaded
    </Html>
  );
}

const WorkExperience = () => {
  const [animationName, setAnimationName] = useState('idle');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  if (!mounted) return null;

  return (
    <section className="c-space my-20" id="work">
      <div className="w-full text-white-600">
        <p className="head-text">What I Do</p>

        <div className="work-container">
          <div className="work-canvas" style={{ minHeight: '500px' }}>
            <Canvas
              camera={{ position: [0, 0, 5], fov: 50 }}
              gl={{ antialias: true, alpha: true }}
              dpr={[1, 2]}
            >
              <color attach="background" args={['#0a192f']} />
              <ambientLight intensity={0.5} />
              <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
              <directionalLight position={[0, 5, 10]} intensity={1} />
              <OrbitControls 
                enableZoom={false} 
                maxPolarAngle={Math.PI / 2} 
                minPolarAngle={Math.PI / 3}
                enablePan={false}
              />

              <Suspense fallback={<Loader />}>
                <Developer position-y={-1.5} scale={2} animationName={animationName} />
              </Suspense>
            </Canvas>
          </div>

          <div className="work-content">
            <div className="sm:py-10 py-5 sm:px-5 px-2.5">
              {whatIDo.map((item, index) => (
                <div
                  key={index}
                  onClick={() => setAnimationName(item.animation.toLowerCase())}
                  onPointerOver={() => setAnimationName(item.animation.toLowerCase())}
                  onPointerOut={() => setAnimationName('idle')}
                  className="work-content_container group">
                  <div className="flex flex-col h-full justify-start items-center py-2">
                    <div className="work-content_logo">
                      <img className="w-full h-full" src={item.icon} alt="" />
                    </div>

                    <div className="work-content_bar" />
                  </div>

                  <div className="sm:p-5 px-2.5 py-5">
                    <p className="font-bold text-white-800">{item.name}</p>
                    <p className="group-hover:text-white transition-all ease-in-out duration-500 mt-2">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
