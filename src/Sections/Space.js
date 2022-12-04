import React, { forwardRef, useState, useLayoutEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import CameraOrbitController from "../Components/CameraOrbitController";

const AnimatedCube = () => {
  const myMesh = React.useRef();
  useFrame(({ clock }) => {
    console.log("Hey, I'm executing every frame!");
    const a = clock.getElapsedTime();
    myMesh.current.rotation.x = a;
  });
  return (
    <mesh
      onClick={(e) => console.log("Clicked De BOx")}
      position={[2, 2, 2]}
      ref={myMesh}
    >
      <boxBufferGeometry />
      <meshPhongMaterial color="royalblue" />
    </mesh>
  );
};

const Scale = ({ width, height }) => {
  const state = useThree();
  const [setSize] = useState(() => state.setSize);
  useLayoutEffect(() => {
    setSize(width, height);
    state.set({ setSize: () => null });
    return () => state.set({ setSize });
  }, [setSize, width, height]);
  return null;
};

export const Space = forwardRef((props, ref) => {
  const bgColor = "#685673";
  return (
    <div>
      <div className="flex flex-row">
        <div class="basis-1/4">01</div>
        <div class="basis-1/4">02</div>
        <div class="basis-14 hover:basis-1/2 w-auto">
          {" "}
          <div className="h-80">
            <Canvas className="border-8 border-black">
              <Scale width={100} height={100} />
              <CameraOrbitController />
              <AnimatedCube />
              <color attach="background" args={[bgColor]} />
              <pointLight position={[10, 10, 10]} />
              <mesh>
                <sphereGeometry />
                <meshStandardMaterial color="hotpink" />
              </mesh>

              <mesh
                visible
                userData={{ hello: "world" }}
                position={[1, 2, 3]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <sphereGeometry args={[1, 16, 16]} />
                <meshStandardMaterial color="hotpink" transparent />
              </mesh>
            </Canvas>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Space;
