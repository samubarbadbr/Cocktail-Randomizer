import { Component, ErrorInfo, ReactNode } from 'react';
import { RefreshCw, AlertTriangle } from 'lucide-react';

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#0b0b0e] text-slate-100 flex flex-col items-center justify-center p-6 text-center">
          <div className="w-16 h-16 rounded-2xl bg-amber-500/10 text-amber-400 border border-amber-500/20 flex items-center justify-center mb-4">
            <AlertTriangle className="w-8 h-8 text-amber-400" />
          </div>
          <h1 className="text-xl font-bold font-syne text-white mb-2">Si è verificato un problema</h1>
          <p className="text-xs text-slate-400 max-w-xs mb-6">
            L'applicazione ha riscontrato un piccolo errore di caricamento. Ricarica la pagina per riprovare.
          </p>
          <button
            onClick={() => window.location.reload()}
            className="py-3 px-6 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-bold text-sm flex items-center gap-2 shadow-lg shadow-amber-500/20 active:scale-95 transition"
          >
            <RefreshCw className="w-4 h-4" />
            Ricarica Cocktail Randomizer
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
