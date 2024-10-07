// Content: Defferent between useEffect and useEffectLayout


// khi re-render  
// 1.useEffect
//  mutate DOM 
//  render UI
//  cleanup function
//  callback function

// 2.useLayoutEffect
//  mutate DOM
//  clean function (sync)
//  callback function (sync)
//  reder UI