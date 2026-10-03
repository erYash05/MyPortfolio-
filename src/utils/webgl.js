/**
 * Safe WebGL context support check to prevent Three.js and Spline crashes
 * in environments with hardware acceleration or WebGL disabled.
 */
export const checkWebGLSupport = () => {
  if (typeof window === "undefined" || !window.document) return false;
  try {
    const canvas = document.createElement("canvas");
    const gl =
      canvas.getContext("webgl", { failIfMajorPerformanceCaveat: false }) ||
      canvas.getContext("experimental-webgl");
    const isSupported = Boolean(gl && gl instanceof WebGLRenderingContext);
    // Cleanup context reference
    if (gl) {
      const loseContext = gl.getExtension("WEBGL_lose_context");
      if (loseContext) loseContext.loseContext();
    }
    return isSupported;
  } catch (e) {
    return false;
  }
};
