import EdgeOptions from '../components/edges/CustomEdge';
import ConvolutionNode from '../components/nodes/ConvolutionNode';
import PoolingNode from '../components/nodes/PoolingNode';
import ReLUNode from '../components/nodes/ReLUNode';
import FullyConnectedNode from '../components/nodes/FullyConnectedNode';
import DropoutNode from '../components/nodes/DropoutNode';
import SoftmaxNode from '../components/nodes/Softmax';

export const nodeTypes = {
	Convolution: ConvolutionNode,
	ReLU: ReLUNode,
	Pooling: PoolingNode,
	FullyConnected: FullyConnectedNode,
	Dropout: DropoutNode,
	Softmax: SoftmaxNode,
};

export const edgeTypes = {
	custom: EdgeOptions,
};
