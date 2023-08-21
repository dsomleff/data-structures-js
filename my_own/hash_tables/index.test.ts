import HashTable from "./index";

describe('Hash table', () => {
    const hashTable = new HashTable(7);

    const seedTheTable = () => {
        hashTable.put("John Smith", "521-1234");
        hashTable.put("Lisa Smith", "521-8976");
        hashTable.put("Sam Doe", "521-5030");
        hashTable.put("Sandra Dee", "521-9655");
        hashTable.put("Ted Baker", "418-4165");
    }

    it('should confirm Put and Get methods are work', () => {
        seedTheTable();

        expect("521-1234").toEqual(hashTable.get("John Smith"));
        expect("521-8976").toEqual(hashTable.get("Lisa Smith"));
        expect("521-5030").toEqual(hashTable.get("Sam Doe"));
        expect("521-9655").toEqual(hashTable.get("Sandra Dee"));
        expect("418-4165").toEqual(hashTable.get("Ted Baker"));
    });

    it('should show Empty', () => {
        expect(null).toEqual(hashTable.get("Ted Baker"));
        expect(null).toEqual(hashTable.get("Tim Lee"));
    });

    it('should confirm Collision is working', () => {
        seedTheTable();
        // these keys will collide
        hashTable.put("John Smith", "521-1234");
        hashTable.put("Sandra Dee", "521-9655");

        expect("521-1234").toEqual(hashTable.get("John Smith"));
        expect("521-9655").toEqual(hashTable.get("Sandra Dee"));
    });
})
