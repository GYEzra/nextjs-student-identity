import { ExclamationTriangleIcon } from "@heroicons/react/16/solid";

const ErrorAccount: React.FC = () => {
    return (
        <div className="rounded-md bg-yellow-50 p-4 mt-10">
            <div className="flex">
                <div className="flex-shrink-0">
                    <ExclamationTriangleIcon className="h-5 w-5 text-yellow-400" aria-hidden="true" />
                </div>
                <div className="ml-3">
                    <h3 className="text-sm font-medium text-yellow-800">Attention needed</h3>
                    <div className="mt-2 text-sm text-yellow-700">
                        <p>
                            Please make sure you have an Ethereum wallet!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ErrorAccount;