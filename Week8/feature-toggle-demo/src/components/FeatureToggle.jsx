function FeatureToggle({ isEnabled, featureName }) {
  const safeFeatureName = featureName?.trim();

  if (isEnabled) {
    return <p>{safeFeatureName || "Unnamed Feature"}</p>;
  }

  return (
    <p>
      {safeFeatureName
        ? `Feature ${safeFeatureName} is disabled`
        : "Feature is disabled"}
    </p>
  );
}

export default FeatureToggle;

//Step 3

// function FeatureToggle({ isEnabled, featureName }) {
//   // Conditional rendering based on the isEnabled prop
//   if (isEnabled) {
//     return <p>{featureName}</p>;
//   }

//   return <p>Feature {featureName} is disabled</p>;
// }

// export default FeatureToggle;


// src/components/FeatureToggle.jsx

// export default function FeatureToggle({
//   isEnabled,
//   children,
//   fallback = null,
//   featureName,
// }) {
//   // Optional guardrail: helps debugging while developing
//   if (typeof isEnabled !== "boolean") {
//     console.warn(
//       `[FeatureToggle] "isEnabled" should be boolean. Received:`,
//       isEnabled
//     );
//   }

//   // Optional: featureName is helpful for logging/debugging in real apps
//   if (featureName) {
//     // You could log or track feature usage here in a real system
//     // (Leaving it quiet by default keeps the UI clean.)
//   }

//   return isEnabled ? children : fallback;
// }