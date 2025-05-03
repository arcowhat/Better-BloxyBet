chrome.runtime.onInstalled.addListener(() => {
    console.log('Extension installed');
  });
  
  chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    console.log('Message received in background:', request);
    
    switch(request.action) {
      case 'log':
        console.log(`[Content Script] ${request.message}`);
        break;
      case 'error':
        console.error(`[Content Script Error] ${request.message}`);
        break;
      case 'foundRows':
        console.log(`Found ${request.count} trading rows`);
        break;
      case 'highlighted':
        console.log(`Highlighted ${request.count} rows`);
        break;
    }
    
    sendResponse({status: 'processed'});
  });
