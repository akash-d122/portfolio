import React, { useEffect, useRef, useState } from 'react';
import { useGraph } from '@react-three/fiber';
import { useAnimations, useGLTF } from '@react-three/drei';
import { SkeletonUtils } from 'three-stdlib';

const Developer = ({ animationName = 'idle', ...props }) => {
  const group = useRef();
  const [modelLoaded, setModelLoaded] = useState(false);
  const [error, setError] = useState(null);

  // Load the 3D model
  const { scene, materials } = useGLTF(
    '/models/animations/developer.glb',
    undefined,
    undefined,
    (error) => {
      console.error('Error loading 3D model:', error);
      setError('Failed to load 3D model');
    }
  );

  // Clone the scene for safe manipulation
  const clone = React.useMemo(() => {
    if (!scene) return null;
    try {
      const cloned = SkeletonUtils.clone(scene);
      setModelLoaded(true);
      return cloned;
    } catch (err) {
      console.error('Error cloning 3D model:', err);
      setError('Error processing 3D model');
      return null;
    }
  }, [scene]);

  const { nodes } = useGraph(clone || { nodes: {}, materials: {} });

  // Set up animations
  const { actions } = useAnimations([], group);

  // Handle animation changes
  useEffect(() => {
    if (!actions[animationName]) return;
    
    // Fade out current animation if any
    Object.values(actions).forEach(action => {
      if (action.isRunning()) {
        action.fadeOut(0.2);
      }
    });
    
    // Play new animation
    actions[animationName]
      .reset()
      .setEffectiveTimeScale(1)
      .setEffectiveWeight(1)
      .fadeIn(0.2)
      .play();
      
    return () => {
      if (actions[animationName]) {
        actions[animationName].fadeOut(0.2);
      }
    };
  }, [animationName, actions]);

  // Show error state if model failed to load
  if (error) {
    return <group {...props} />;
  }

  return (
    <group ref={group} {...props} dispose={null}>
      <primitive object={nodes.Hips} />
      <skinnedMesh
        geometry={nodes.Wolf3D_Hair.geometry}
        material={materials.Wolf3D_Hair}
        skeleton={nodes.Wolf3D_Hair.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Glasses.geometry}
        material={materials.Wolf3D_Glasses}
        skeleton={nodes.Wolf3D_Glasses.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Body.geometry}
        material={materials.Wolf3D_Body}
        skeleton={nodes.Wolf3D_Body.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Outfit_Bottom.geometry}
        material={materials.Wolf3D_Outfit_Bottom}
        skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Outfit_Footwear.geometry}
        material={materials.Wolf3D_Outfit_Footwear}
        skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Outfit_Top.geometry}
        material={materials.Wolf3D_Outfit_Top}
        skeleton={nodes.Wolf3D_Outfit_Top.skeleton}
      />
      <skinnedMesh
        name="EyeLeft"
        geometry={nodes.EyeLeft.geometry}
        material={materials.Wolf3D_Eye}
        skeleton={nodes.EyeLeft.skeleton}
        morphTargetDictionary={nodes.EyeLeft.morphTargetDictionary}
        morphTargetInfluences={nodes.EyeLeft.morphTargetInfluences}
      />
      <skinnedMesh
        name="EyeRight"
        geometry={nodes.EyeRight.geometry}
        material={materials.Wolf3D_Eye}
        skeleton={nodes.EyeRight.skeleton}
        morphTargetDictionary={nodes.EyeRight.morphTargetDictionary}
        morphTargetInfluences={nodes.EyeRight.morphTargetInfluences}
      />
      <skinnedMesh
        name="Wolf3D_Head"
        geometry={nodes.Wolf3D_Head.geometry}
        material={materials.Wolf3D_Skin}
        skeleton={nodes.Wolf3D_Head.skeleton}
        morphTargetDictionary={nodes.Wolf3D_Head.morphTargetDictionary}
        morphTargetInfluences={nodes.Wolf3D_Head.morphTargetInfluences}
      />
      <skinnedMesh
        name="Wolf3D_Teeth"
        geometry={nodes.Wolf3D_Teeth.geometry}
        material={materials.Wolf3D_Teeth}
        skeleton={nodes.Wolf3D_Teeth.skeleton}
        morphTargetDictionary={nodes.Wolf3D_Teeth.morphTargetDictionary}
        morphTargetInfluences={nodes.Wolf3D_Teeth.morphTargetInfluences}
      />
    </group>
  );
};

useGLTF.preload('/models/animations/developer.glb');

export default Developer;
