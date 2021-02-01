import store from '@/store';

interface IProps {}
export default function IframeTest(params:IProps) {
  return (
    <>
      <iframe height="100%" width="100%" name="iframeTest" src={store.getState().userData.jumpPath} title="iframeTest" frameBorder="0"></iframe>
    </>
  )
}