import { Icons } from "../helpers/icons";

type SearchProps = {
    value: string;
    onChange: (value: string) => void;
    onKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void;
};

export const Search: React.FC<SearchProps> = ({ value, onChange, onKeyDown }) => {
    return (
        <div className="flex items-center max-w-[600px] w-full bg-white shadow-lg h-10 rounded-lg px-4">
            <span className="mr-4">{Icons('search')}</span>
            <input
                type="text"
                value={value}
                placeholder="Search for a location ..."
                className="text-black w-full outline-none"
                onChange={event => onChange(event.target.value)}
                onKeyDown={onKeyDown}
            />
        </div>
    );
}